import Imagem from '../Galeria/Imagem'




const ModalDeZoom = ({ foto }) =>{

    return(
        <>
            {foto &&   <dialog open={!!foto}>
            <Imagem  foto={foto} expandida={true}/>
            <fomr method="dialog">
                <button>ok</button>
            </fomr>
        </dialog>}
        </>
    )
}

export default ModalDeZoom