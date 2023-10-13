import styled from "styled-components"

const CampoDeTextoPersonalizado = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    margin: 0 auto;
    label{
        text-align: left;
        display: block;
        color: #000;
        font-weight: 700;
        width: 80%;
        margin: 0 auto;

    }
    input{
        background-color: #fff;
        color: #000;
        padding: 0.7em;
        width: 80%;
        border: 1px solid #000000ac;
        border-radius: 5px;
        margin: 0 auto;

    }
    input::placeholder{
        font-size: 15px;
        color: #000;
    }

`

const CampoDeTexto = ({label, placeholder, tipo}) =>{
return(
    <CampoDeTextoPersonalizado>
        <label>{label}</label>
        <input type={tipo} placeholder={placeholder}/>
    </CampoDeTextoPersonalizado>
)

}


export default CampoDeTexto