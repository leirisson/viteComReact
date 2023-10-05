import styled from "styled-components"
import CampoDeTexto from "../CampoDeTexto"

//criando componente e estilizando 
const HeaderEstilizado =  styled.header`
    margin: 0 20px;
    padding: 65px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
        max-width: 212px;
    }
    
`

const Cabecalho = () =>{
    return(
        <HeaderEstilizado>
            <img src="/imagens/logo.png" alt="logo do site"/>
            <CampoDeTexto placeholder="O que você procura ?"/>
        </HeaderEstilizado>
    )
}

export default Cabecalho