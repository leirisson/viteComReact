import { styled } from 'styled-components'
import EstilosGlobais from './Components/EstilosGlobais'
import Cabecalho from './Components/Cabecalho'
import BarraLateral from './Components/BarraLateral'
import Banner from './Components/Banner'
import Galeria from './Components/Galeria'

import fotos from './fotos.json'
import { useState } from 'react'
import ModalDeZoom from './Components/ModalDeZoom'


const FundoGradiend = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
  
`
const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;

`
const Maincontainer = styled.main`
  display: flex;
  gap: 24px;
`

const ConteudoDaGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

`

const App = () => {

  const [fotosDagaleria, setNovasFotosDaGaleria] =  useState(fotos)
  const [fotoSelecionada, setNovaFotoselecionada] = useState(fotos[0])

  return (
    <FundoGradiend>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <Maincontainer>
          <BarraLateral />
          <ConteudoDaGaleria>
          
          <Banner texto=" A galeria mais completa de fotos do espaço!" backgroundImage="imagens/banner.png" />
          <Galeria aoFotoElecionada={foto => setNovaFotoselecionada(foto)} fotos={fotosDagaleria}/>
          </ConteudoDaGaleria>

        </Maincontainer>

      </AppContainer>
    <ModalDeZoom fotos={fotoSelecionada}/>

    </FundoGradiend>
  )
}

export default App
