import { Container } from "./style";
import incomeTag from '../../assets/Entradas.svg'
import saida from '../../assets/Saídas.svg'
import total from '../../assets/Total.svg'
import React , { useContext } from "react";
import { useTransactions } from "../../hooks/TransactionsContext";



export function Summary() {
    const {transactions} = useTransactions()

    const summary = transactions.reduce((acc,transaction) => {
        if(transaction.type === 'deposit') {
            acc.deposits += transaction.amount
            acc.total += transaction.amount
        }else {
            acc.withdraws += transaction.amount
            acc.total -= transaction.amount
        }

        return acc;
       
    },{
        deposits:0,
        withdraws:0,
        total:0
    })

    return (

        <Container>


            <div>

                <header>
                    <p>Entradas</p>
                    <img src={incomeTag} alt="Entradas" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format( summary.deposits)}</strong>
            </div>

            <div>

                <header>
                    <p>Saidas</p>
                    <img src={saida} alt="Entradas" />
                </header>
                <strong> - {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format( summary.withdraws)}</strong>
            </div>

            <div className="Verder">

                <header>
                    <p>Total</p>
                    <img src={total} alt="Entradas" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format( summary.total)}</strong>
            </div>
        </Container>
    )
}