import styled from 'styled-components'

const HeaderEstilizado = styled.header`
background-color: #000;
margin-top: 0;
display: flex;
justify-content: space-around;

`
const LogoEstilizada = styled.div`
padding: 0.5em;
background-color: aqua;
margin: 10px 0;
width: 50px;
`

const InputPersonalizado = styled.input`
background-color: transparent;
border-color: red;
font-size: 14px;
color: #fff;
font-weight: 400;
margin: 10px 0;
`


const Cabecalho = () =>{
    return(
       <HeaderEstilizado>
            <LogoEstilizada>
                Logo
            </LogoEstilizada>
            <InputPersonalizado placeholder='Pesquisar...'/>
       </HeaderEstilizado>
    )
}

export default Cabecalho