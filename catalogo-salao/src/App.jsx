import Banner from "./Components/Banner"
import BarraLateral from "./Components/BarraLateral"
import Cabecalho from "./Components/Cabecalho"

import styled from "styled-components"

const ContainerPersonalizado = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
margin: 20px 10px;

`


function App() {


  return (
    <>
     <Cabecalho />
     <ContainerPersonalizado>
     <BarraLateral />
     <Banner texto="Melhor Pagode do Mundo"/>
     </ContainerPersonalizado>
    
    </>
  )
}

export default App
