import styled from "styled-components"
import Rede from "./Rede"

const FooterPersonalizado = styled.footer`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    h4{
        color: #00000084;
        font-size: 28px;
    }
    p{
        color: #000;
        font-weight: 700;
    }
    span{
        color: #007c15;
        font-weight: 700;
    }

`
const DivPersonalizada = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 1em;

`

const Footer = () =>{
    return (
        <FooterPersonalizado>
                <h4>-- Contatos --</h4>
            <DivPersonalizada>
                <Rede texto="Google" src="imagens/google.png" alt="logo do google.com"/>
                <Rede texto="Apple" src="imagens/apple.png" alt="logo do google.com"/>
                <Rede texto="Facebook" src="imagens/facebook.png" alt="logo do google.com"/>
            </DivPersonalizada>
            <p>Don’t have an Account? <span>Sign up here</span></p>
        </FooterPersonalizado>
    )
}


export default Footer