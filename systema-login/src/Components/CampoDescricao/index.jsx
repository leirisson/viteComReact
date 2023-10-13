import styled from "styled-components"


const CampoDescricaoEstilizado = styled.div`
      
    h1{
        height: 50px;
        color: #000;

    }
    p{
        margin-top: 0;
        color: #00000088;
    }

` 

// eslint-disable-next-line react/prop-types
const CampoDescricao = ({tituloDescricao, descricao}) =>{

    return(
        <CampoDescricaoEstilizado>
            <h1>{tituloDescricao}</h1>
            <p>{descricao}</p>
        </CampoDescricaoEstilizado>
    )
} 



export default CampoDescricao