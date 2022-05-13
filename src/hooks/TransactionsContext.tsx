import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface Transacitons {
    id: number;
    title: string;
    amount:number;
    type: string;
    category: string;
    createdAt: string;
}

type  TransactionsInput = Omit<Transacitons, 'id' | 'createdAt'>;

interface TransactionsProviderProps {
    children: ReactNode
}

interface TransactionsContextData {
    transactions: Transacitons[]
    createTransaction: (Transacitons: TransactionsInput) => Promise<void>
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData)


export function TransactionsProvider({children} : TransactionsProviderProps) {
    
    const [transactions, setTransactions] = useState<Transacitons[]>([])

    useEffect(() => {
        api.get('/transactions').then(
            response => setTransactions(response.data.transactions)
        )
    },[])

 async   function createTransaction(transactionInput: TransactionsInput) {
      const response = await  api.post('/transactions', {
          ...transactionInput,createdAt: new Date()
      })
      const {transaction } = response.data
      setTransactions([
          ...transactions,transaction, 
      ])
    }

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}

        </TransactionsContext.Provider>
    )
}

export function useTransactions() {
    const context = useContext(TransactionsContext)

    return context
}