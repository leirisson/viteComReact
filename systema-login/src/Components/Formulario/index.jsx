import styled from "styled-components"
import CampoDeTexto from "../CampoTexto"
import CheckBox from "../CheckBox"
import Botao from "../Botao"

const FormularioPersonalizado = styled.form`
    width: 70%;
    margin: 0 auto;
    padding: 1em;

`

function concluido(){
    alert("Cadastro Concluido !")
}

const Formulario = () =>{
    return(
        <FormularioPersonalizado onSubmit={concluido}>
            <CampoDeTexto label="Nome" tipo="text"placeholder="Informe seu Nome" />
            <CampoDeTexto label="Senha" tipo="password" placeholder="Informe sua Senha"/>
            <CheckBox label="Não é um Robo" tipo="checkbox"/>
            <Botao value="Cadastrar"/>
        </FormularioPersonalizado>
    )

}

export default Formulario