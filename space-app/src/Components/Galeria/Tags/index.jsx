import styled from 'styled-components'
import tags from './._tags.json'

const Tagestilizada = styled.div`
    margin: 1em 0;
    display: flex;
    gap: 1em;
    align-items: center;
    
    p{
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #fff;
        font-weight: 400;
        font-size: 24px;
        

    }
    button{
        background: rgba(217, 217, 217, 0.3);
        border: none;
        padding: 10px 8px 1px 8px;
        border-radius: 10px;
        width: 120px;
        height: 50px;
        color: #fff;
        font-size: 23px;
        font-weight: 700;


    }
    button:hover{
        border: 2px solid #C98CF1;

    }

`
const Tags = () =>{
    return(
       <Tagestilizada>
       <p>Busque por tags: </p>
       {tags.map(tag => <button key={tag.id}>{tag.titulo}</button>)}
       </Tagestilizada>
    )
}


export default Tags