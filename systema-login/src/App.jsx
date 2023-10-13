import './App.css'
import styled from 'styled-components'
import Titulo from './Components/Titulo'
import CampoDescricao from './Components/CampoDescricao'
import Formulario from './Components/Formulario'
import Footer from './Components/Footer'

const ContainerEstilizado = styled.div`
        display: flex;
        flex-direction: column;
        background-color: #ffffff;
        border-radius: 5px;
        box-shadow: 4px 5px 2px rgba(0,0,0,0.3);
`
function App() {
  

  return (
    <>
      <ContainerEstilizado>
        <Titulo />
        <CampoDescricao 
        tituloDescricao="Administrador" 
        descricao="Welcome back. Enter your credentials to access your account"/>
        <Formulario />
        <Footer />
      </ContainerEstilizado>
    </>
  )
}

export default App
