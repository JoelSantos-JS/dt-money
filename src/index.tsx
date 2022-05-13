import React from 'react';
import ReactDOM from 'react-dom/client';
import {createServer, Model} from 'miragejs'

import { App } from './App';
import { request } from 'http';


createServer({
  models: {
    transaction: Model,
  },


  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id:1 ,
          title: 'Freelance de Website',
          type: 'deposit',
          category: 'dev',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:00')
        },
        {
          id:2 ,
          title: 'Alugel',
          type: 'witdraw',
          category: 'casa',
          amount: 2000,
          createdAt: new Date('2021-02-10 09:00:00')
        },
      ]
    })
  },

  routes(){
    this.namespace = 'api'
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions',(schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
