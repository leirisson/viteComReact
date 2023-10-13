import styled from "styled-components"

const BotaoEstilizado = styled.button`
    width: 85%;
    margin: 20px;
    input{
        background-color: transparent;
        border: none;
        font-size: 20px;
    }
`

const Botao = ({value}) =>{
    return(
        <BotaoEstilizado>
            <input type="button" value={value} />
        </BotaoEstilizado>
    )
}


export default Botao