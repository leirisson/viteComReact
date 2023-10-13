import styled from "styled-components"
import CampoDeTexto from "../CampoTexto"

const CheckBoxPersonalizado = styled.div`
    display: flex;
    justify-content: baseline;
    padding: 0.5em;
    label{
        color: #000;
    }
    input{
        margin-left: 10%;
    }

`

const CheckBox = ({label, tipo}) => {
    return(
        <CheckBoxPersonalizado>
           <input type={tipo} />
           <label>{label}</label>
        </CheckBoxPersonalizado>
    )

}

export default CheckBox