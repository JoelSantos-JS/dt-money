import { useState } from 'react'
import { Dashborad } from './components/Dashborad'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'
import Modal from 'react-modal'
import { NewTransactionModal } from './components/TransactionModal'
import {  TransactionsProvider } from './hooks/TransactionsContext'


Modal.setAppElement('#root')


export  function App() {

  const [isNewTrasactionModalOpen , setisNewTrasactionModalOpen] = useState(false)

  function handleOpenNewTrasactionModal() {
      setisNewTrasactionModalOpen(true)
  }

  function handleCloseNewTrasactionModal() {
      setisNewTrasactionModalOpen(false)
  }
  return (
    <>
      <TransactionsProvider >
      <Header onOpenNewTransactionMoadl={handleOpenNewTrasactionModal}/>
      <Dashborad/>

      <NewTransactionModal isOpen={isNewTrasactionModalOpen} onRequestClose={handleCloseNewTrasactionModal} />
      <GlobalStyle/>
      </TransactionsProvider>
    </>
  )
}