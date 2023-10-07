import styled from "styled-components"

const ItemdeListaPersolaziado = styled.li`
font-size: 25px;
font-weight: 400;
text-decoration: none;
`

const ItemPersonalizado = ({children}) =>{
    return(
    
        <ItemdeListaPersolaziado>
            {children}  
        </ItemdeListaPersolaziado>
       
    
       
    )
}

export default ItemPersonalizado