import Modal from 'react-modal'
import { Container, TransactionTypeContainer ,  RadioBox} from './style';
import entradaImg from '../../assets/Entradas.svg'
import saidaImg from '../../assets/Saídas.svg'
import closeImg from '../../assets/close.svg'
import { FormEvent, useState , useContext} from 'react';
import { api } from '../../services/api';
import { useTransactions } from '../../hooks/TransactionsContext';


interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void
}

export function NewTransactionModal({isOpen, onRequestClose} : NewTransactionModalProps) {
        const {createTransaction} = useTransactions()


    const [title,setTitle] = useState('')
    const [value,setValue] = useState(0)
    const [category , setCategory] = useState('')
    const [type,setType] = useState('deposit')


   async  function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault()

        const data = {
            title,
            value,
            category,
            type
        }
        
        api.post('/transactions',data)

      await  createTransaction({
            title,
            amount: value,
            category,
            type,
        })

        setTitle('')
        setValue(0)
        setCategory('')
        setType('deposit')
        onRequestClose()
    }

   

 return (

    <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="react-modal-overlay" className="react-modal-content">
    <button type='button' onClick={onRequestClose} className="react-modal-close"> 
    <img src={closeImg} alt="Fechar Modal" />
    </button>
    <Container onSubmit={handleCreateNewTransaction}>
    <h2>Cadastrar Transaçao</h2>

    <input type="text" placeholder='Titulo' value={title} onChange={event => setTitle(event.target.value)}/>
    <input type="number" placeholder='Valor' value={value} onChange={event => setValue(+event.target.value)} />

    <TransactionTypeContainer>
        <RadioBox type='button' onClick={() => {setType('deposit')}} isActive= {type === 'deposit'} ActiveColor="green">
            <img src={entradaImg} alt="Entrada" />
            <span>Entrada</span>
        </RadioBox>
        <RadioBox type='button' onClick={() => {setType('witdraw')}} isActive= {type === 'witdraw'} ActiveColor= "red">
            <img src={saidaImg} alt="Saida" />
            <span>Saida</span>
        </RadioBox>
    </TransactionTypeContainer>
    <input type="text" placeholder='Categoria'value={category} onChange={event => setCategory(event.target.value)} />
    <button type="submit"  value="Cadastro">Cadastro</button>
    </Container>
</Modal>

 )
}