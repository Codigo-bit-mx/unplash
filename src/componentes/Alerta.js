import React, {useContext} from 'react';
import imgContext from '../context/app/imgContext';
import styled from 'styled-components';

const ContAlerta = styled.div`
    width: 100%;
    background-color: #b51010;
    color: white;
    text-align: center;
    padding: 5px; 
    margin: 0px 0 10px 0;
    border-radius: 8px;
`;
const Parrafo = styled.div`
    margin: 0;
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const Alerta = () => {
    
    const imgsContext = useContext(imgContext);
    const {alerta } = imgsContext;

    return ( 
        <div>

            {alerta ? 

             (   <ContAlerta> <Parrafo>Ingresa la informacion restante</Parrafo> </ContAlerta> )
            
            : null }
        
        </div>
     );
}
 
export default Alerta;