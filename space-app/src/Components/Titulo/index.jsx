import styled from "styled-components";

const Titulo = styled.h2`
    text-align: ${props => props.$alinhamento ? props.$alinhamento: 'left'};
    color:#7B78E6;
    font-size: 32px;
   
`


export default Titulo