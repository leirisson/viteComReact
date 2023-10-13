import styled from "styled-components"

const TituloPersonalizado = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
        color: #000000b7;
    }
    span{
        color: #3fb845;
    }
    img{
        width: 7%;
        height: 40%;
    }

`

const Titulo = () =>{
    return(
       <TituloPersonalizado>
        <img src="imagens/seguranca.png" alt="logo" />
        <h1>Log<span>System</span></h1>
       </TituloPersonalizado>
    )
}

export default Titulo
