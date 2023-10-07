import styled from "styled-components"

const ContainerPersonalizado = styled.div`
    background-image: url("../public/3.png");
    height: 110px;
    border-radius:10px;

`

const TituloPersonalizado = styled.h1`
font-family: Arial, Helvetica, sans-serif;
font-weight: 700;
color: #fff;
font-size: 15px;

text-align: right;

`


const Banner = ({texto}) =>{
    return(
        <ContainerPersonalizado>
            <TituloPersonalizado>{texto}</TituloPersonalizado>
        </ContainerPersonalizado>
    )

}

export default Banner