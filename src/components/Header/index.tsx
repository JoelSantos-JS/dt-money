import { useState } from 'react'
import logo from '../../assets/Logo.svg'
import Modal from 'react-modal'

import { Container, Content } from './style'

interface HeaderProps {
    onOpenNewTransactionMoadl: () => void;
}


export function Header({onOpenNewTransactionMoadl}: HeaderProps) {
   
    
    return (
        <Container>
            <Content>
            <img src={logo} alt="dt money" />
            <button type="button" onClick={onOpenNewTransactionMoadl}>Nova Transaçao</button>

            </Content>
        </Container>
    )
}