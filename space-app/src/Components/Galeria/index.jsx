import Titulo from "../Titulo"
import Imagem from "./Imagem"
import Populares from "./Populares"
import Tags from "./Tags"
import styled from "styled-components"

const GaleriaContainer  = styled.div`
    display: flex;
    li{
            margin: 20px;
    }

`
    
const SecaoFluida = styled.section`
    flex-grow: 1;

`


const Galeria = ({fotos = [], aoFotoSelecionada}) =>{

    return(
        <>
        <Tags />
        <GaleriaContainer >
            
            <SecaoFluida>
            <Titulo> Navegue pela Galeria </Titulo>
            <ul>
                {fotos.map(foto => <li key={foto.id}><Imagem aoZoomSolicitado={aoFotoSelecionada} src={foto.path} alt={foto.titulo}
                titulo={foto.titulo}
                font={foto.fonte}
                caminho={foto.path}
                /></li>)}
            </ul>
           
            </SecaoFluida>
            <Populares />
        </GaleriaContainer>
       
        </>
        
    )

}

export default Galeria