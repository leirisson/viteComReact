import styled from "styled-components"
import ItemNavegacao from "./ItemNavegacao"

const ListaEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
    margin: 30px;

`
    



const BarraLateral = () =>{
    return(
        <aside>
            <nav>
               <ListaEstilizada>
                    <ItemNavegacao>
                        wwef
                    </ItemNavegacao>
                    <ItemNavegacao>
                        wwef
                    </ItemNavegacao>
               </ListaEstilizada>  
            </nav>
        </aside>
    )

}

export default BarraLateral