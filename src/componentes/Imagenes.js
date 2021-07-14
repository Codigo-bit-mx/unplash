import React, {useContext} from 'react';
import ListadoIMG from './ListadoIMG';
import ListadoBUS from './ListadoBUS';
import styled from 'styled-components';
import imgContext from '../context/app/imgContext';

const ImagenDiv = styled.div`
    width: 100%;
    max-width: 90%;
    margin: 0 auto;
`;

const Imagenes = () => {

    const imgsContext = useContext(imgContext);
    const { busqueda } = imgsContext;

    return ( 
    <ImagenDiv>

        {busqueda ? <ListadoBUS/> : <ListadoIMG /> }
        {/* <ListadoIMG /> */}
    </ImagenDiv>
     );
}
 
export default Imagenes;