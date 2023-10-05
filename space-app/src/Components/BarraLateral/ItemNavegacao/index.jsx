import styled from "styled-components"

const itemDeListaEstilizado = styled.li`

`

const ItemNavegacao = (children, iconeAtivo, iconeInativo, ativo = false) =>{
    return(
        <itemDeListaEstilizado>
        <img src={ativo ? iconeAtivo : iconeInativo} alt="icone de navegação" />
        {children}
        </itemDeListaEstilizado>
    )
}

export default ItemNavegacao