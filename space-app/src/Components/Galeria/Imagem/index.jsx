import styled  from "styled-components"

const FigurePersonalizado = styled.figure`
    width: ${(props) => (props.$expandida ? '90%' : '460px')};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }
    figcaption {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;
        h3 {
            font-family: 'GandhiSansBold';
        }
        h4 {
            flex-grow: 1;
        }
        h3,
        h4 {
            width: 70%;
            margin: 0;
            font-size: 16px;
        }
        .descricao{
            width: 70%;
        }
        .button{
        
            position: absolute;
            align-self: self-end;

        }
    }
`


const ButtonPersonalizado = styled.button`
    background-color: transparent;
    border: none;
  

    
    
`



const Imagem = (props) =>{
    return(
    <FigurePersonalizado>
          
        <img src={props.src} alt={props.alt}/>
        
        <figcaption>
             <div className="descricao">
        <h3>{props.titulo}</h3>
            <h4>{props.caminho}</h4>
        </div>
        <div className="button">
            <ButtonPersonalizado><img src="icones/favorito-ativo.png" alt="favorito ativo "/></ButtonPersonalizado>
            <ButtonPersonalizado onClick={props.aoZoomSolicitado}><img src="icones/expandir.png" alt="favorito ativo "/></ButtonPersonalizado>
        </div>
             

        </figcaption>
    </FigurePersonalizado>
    )
}

export default Imagem