import styled from "styled-components";


export const Container = styled.form `
    h2 {
        color: var(--textos);
        font-size: 1.5rem ;
        margin-bottom: 2rem;
    }
    input {
        width: 100% ;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;
        background:  #e7e9ee;
        font-weight: 400;
        border: 1px solid #d7d7d7;
        font-size: 1rem;
        &::placeholder {
            color: var(--textos);
        }
        & + input {
            margin-top: 1rem;
        }
    }

    
 
        button[type="submit"] {
            width: 100%;
            padding: 0 1.5rem;
            height: 4rem;
            background: var(--green);
            color: #fff;
            border: 0;
            font-weight: 600;
            cursor: pointer;
            border: 4px;
            font-size: 1rem;
            margin-top: 1.5rem;
            transition:  filter 0.2s;
            &:hover {
                filter: brightness(0.9);
            }
        }

`

export const TransactionTypeContainer = styled.div`

        margin: 1rem 0;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        gap: 0.5rem;

    
       
`


interface RadioBoxProps {
    isActive: boolean
    ActiveColor: 'green' | 'red'
}





const colors = {
    green: '#8ef9d2',
    red: ' #fc8095'
}

export const RadioBox = styled.button <RadioBoxProps>`
     
            height: 4rem;
            border: 1px solid #d7d7d7;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: ${(props) => props.isActive ? colors[props.ActiveColor]  : 'transparent'};
            
            &:hover {
                border-color: #aaa;
            
        }
        img {
            height: 20px;
            width: 20px;
        }
        span {
            display: inline-block;
            margin: 1rem;
            font-size: 1rem;
            color: var(--textos);
        }

`