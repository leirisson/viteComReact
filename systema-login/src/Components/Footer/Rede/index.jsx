import styled from "styled-components"

const DivPersonalizada = styled.div`
    display: flex;
    padding: 1em;
    width: 150px;
    border-radius: 5px;
    border: 1px solid #00000042;
    justify-content: center;
    align-items: center;
   
    gap: 0.5em;
    label{
        font-size: 20px;
        color: #000;
    }
`


const Rede = ({ src, texto, alt }) => {

    return (
        <DivPersonalizada>
            <img src={src} alt={alt} />
            <label>{texto}</label>
        </DivPersonalizada>
    )

}

export default Rede