import styled from "styled-components"
import ItemPersonalizado from "./ItensPersonalizado"
const ListaPersonalizada = styled.ul`
border: 1px #000 solid;
width: 100px;
height: 70px;
border-radius: 10px;
padding: 1em;

`

const BarraLateral = () =>{
    return(
        <aside>
             <nav>
                <ListaPersonalizada>
                    <ItemPersonalizado>Home</ItemPersonalizado>
                    <ItemPersonalizado>Curtidas</ItemPersonalizado>
                    <ItemPersonalizado>Paginas</ItemPersonalizado>
                </ListaPersonalizada>
             </nav>
        </aside>
   
    )
}

export default BarraLateral