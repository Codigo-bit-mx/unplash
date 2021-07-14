import React, {Fragment, useContext, useEffect, useState} from 'react';
import imgContext from '../context/app/imgContext';
import styled from 'styled-components';
import { css } from '@emotion/react';
import PacmanLoader from "react-spinners/PacmanLoader";

const ListaUl = styled.ul`
    display: grid;
    grid-template-columns: auto;
    grid-gap: 1em;
    padding: 0;

    @media (min-width: 768px){
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1em;
        padding: 0;
        margin-bottom: 3em;
    }

    @media (min-width: 991px){
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 1em;
        margin-bottom: 3em;
    }
`;
const ListaLi = styled.li`
    list-style: none;
`;
const Figure = styled.figure`
    color: #fff;
    position: relative;
    overflow: hidden;
    margin: 0;
    width: 100%;
    height: 100%;
    background: #000000;
    border-radius: 12px;

    * {
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }
    @media (min-width: 768px){
        height: 250px; 
    }

    figcaption{
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 3em 3em;
        width: 100%;
        height: 100%;

        &::before {
            position: absolute;
            top: 50%;
            right: 30px;
            bottom: 50%;
            left: 30px;
            border-top: 1px solid rgba(255, 255, 255, 0.8);
            border-bottom: 1px solid rgba(255, 255, 255, 0.8);
            content: '';
            opacity: 0;
            background-color: #ffffff;
            -webkit-transition: all 0.4s;
            transition: all 0.4s;
            -webkit-transition-delay: 0.6s;
            transition-delay: 0.6s;
        }
    }

    img{
        opacity: 1;
        border-radius: 12px;
        width: 100%;
        -webkit-transition: opacity 0.35s;
        transition: opacity 0.35s;

        @media (min-width: 768px){
        /* width: 250px; */
        height: 250px; 
        object-fit: cover;
    }
    }

    h4{
        margin: 0 0 5px;
        opacity: 0;
        -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
        transition: opacity 0.35s,-webkit-transform 0.35s,-moz-transform 0.35s,-o-transform 0.35s,transform 0.35s;
        word-spacing: -0.15em;
        font-weight: 300;
        text-transform: uppercase;
        -webkit-transform: translate3d(0%, 50%, 0);
        transform: translate3d(0%, 50%, 0);
        -webkit-transition-delay: 0.3s;
        transition-delay: 0.3s;
    }

    p{
        margin: 10px 0 10px 0;
        opacity: 0;
        -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
        transition: opacity 0.35s,-webkit-transform 0.35s,-moz-transform 0.35s,-o-transform 0.35s,transform 0.35s;
        font-weight: 200	;
        -webkit-transition-delay: 0s;
        transition-delay: 0s;
    }

    button{
        opacity: 0;
        border: 1px solid red;
        padding: 5px 13px;
        border-radius: 8px;
        background: none;
        color: red;
        margin: 10px 0; 
        -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
        transition: opacity 0.35s,-webkit-transform 0.35s,-moz-transform 0.35s,-o-transform 0.35s,transform 0.35s;
        position: absolute;
        z-index: 1;
    }

    &:hover button {
        opacity: 1;
        -webkit-transition-delay: 0.3s;
        transition-delay: 0.3s;
        
    }

    &:hover img{
        opacity: 0.35;
    }

    &:hover figcaption h4 {
        opacity: 1;
        -webkit-transform: translate3d(0%, 0%, 0);
        transform: translate3d(0%, 0%, 0);
        -webkit-transition-delay: 0.3s;
        transition-delay: 0.3s;
    }

    &:hover figcaption p {
        opacity: 0.9;
        -webkit-transition-delay: 0.6s;
        transition-delay: 0.6s;
    }

    &:hover figcaption::before {
        background: rgba(255, 255, 255, 0);
        top: 30px;
        bottom: 30px;
        opacity: 1;
        -webkit-transition-delay: 0s;
        transition-delay: 0s;
    }
`;
const Pacman = styled.div`
    margin: 3em 0;
    padding: 1em 0; 
`;
const override = css`
    display: block;
    margin: 0em auto;
    border-color: red;
`;

const ListadoIMG = () => {

    const imgsContext = useContext (imgContext);
    const {
        imagenes,
        cargando,
        obtenerImgs,
        eliminarImg      
    } = imgsContext;

    const [loading, setLoading] = useState(true);
    let [color] = useState("#10C5A1");
    
    useEffect(() => {
        setTimeout(()=> {
            obtenerImgs();
        }, 3000)

        if(imagenes.length !== 0){
            setLoading(false);
        }
    }, [cargando, obtenerImgs, imagenes]);

    return (  
        <Fragment>
        
        {imagenes.length === 0 ?
        (
          <Pacman>
            <PacmanLoader color={color}  loading={loading} css={override} size={25} />
          </Pacman>
        )
        :
        ( 
        <ListaUl>

        {imagenes.map((imagen) => (
            
            <ListaLi 
            key={imagen._id}
            >
                <Figure>
                    <img src={ imagen.ruta } alt={imagen.titulo}/>
                    <figcaption>
                    <h4>{ imagen.titulo }</h4>
                    <p>{ imagen.descripcion }</p>
                    <button type="submit"
                    onClick={() => eliminarImg(imagen) }
                    >Delete</button>
                    </figcaption>
                </Figure>
            </ListaLi>
                
                ))} 
        </ListaUl>
        )}

        </Fragment>
    
    );
}
 
export default ListadoIMG;