import { styled } from 'styled-components'
import EstilosGlobais from './Components/EstilosGlobais'
import Cabecalho from './Components/Cabecalho'
import BarraLateral from './Components/BarraLateral'
import Banner from './Components/Banner'

const FundoGradiend = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
  
`
function App() {
  return (
   <FundoGradiend>
   <EstilosGlobais />
   <Cabecalho />
   <Banner texto=" A galeria mais completa de fotos do espaço!" backgroundImage="./assets/banner.png"/>
   <BarraLateral />
   
   </FundoGradiend>
  )
}

export default App
