import React, { useContext, useState } from 'react';
import Formulario from './Formulario';
import imgContext from '../context/app/imgContext';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import styled from 'styled-components';

const ContenedorHeader = styled.div`
    width: 100%;
    max-width: 90%;
    margin: 0 auto;

   @media (min-width: 768px) {
    width: 100%;
    max-width: 70%;
    margin: 0 auto 2em auto;
    border-bottom: 1px solid #d1d1d1;
   }
`;
const ContenedorGrid = styled.div`
    padding: 1em 0;
    display: grid;
    
   @media (min-width: 768px){
    padding: 2em 0;
    display: grid;
    grid-template-columns: repeat(3, auto [col-start] auto [col-middle] auto [col-end]);
   }
`;
const Parrafo = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Zen+Tokyo+Zoo&display=swap');
    font-family: 'Zen Tokyo Zoo', cursive;
    font-size: 23px;
    font-style: normal;
    font-weight: 550;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    margin: 0;
`;
const Spans = styled.span`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 12px;
    font-weight: 600;
`;
const DivInput = styled.div`
    margin: 1em auto;

    @media (min-width: 768px) {
        width: 100%;
        max-width: 80%;
        margin: 0 10px;
    }
`;
const Input = styled.input`
    width: 300px;
    padding: 8px;
    border: 1px solid #BDBDBD;
    box-sizing: border-box;
    filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.1));
    border-radius: 12px;
    outline: none;
`;
const BtnDiv = styled.div`
    width: 100%;
    max-width: 50%;
    margin: 0 auto;
    
    @media (min-width:768px){
        width: 100%;
        max-width: 100%;
        grid-column-end: end;
        margin: 0;
    }
`;
const Btn = styled.button`
    width: 100%;
    background-color: #3DB46D;
    color: #fff;
    padding: 8px 8px;
    border: 2px solid #3DB46D;
    border-radius: 9px;
    outline: none;
    transition: .2s ease-in-out;
        &:hover{
            background-color: #0c7135;
        };

    @media (min-width: 768px){
    background-color: #3DB46D;
    color: #fff;
    padding: 8px 8px;
    border: 2px solid #3DB46D;
    border-radius: 9px;
    outline: none;
    transition: .2s ease-in-out;
        &:hover{
            background-color: #0c7135;
        }
    }
`;
const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: '#fff',
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));


const Header = () => {

    const imgsContext = useContext(imgContext)
    const { obtenerCategoria, limpiarCategoria } = imgsContext;

    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    const valorBusqueda = (e) => {
        const keyCode = e.keyCode;
        const categoria = e.target.value;
        if(keyCode === 13 && categoria !== ''){
            obtenerCategoria(categoria);
        }else{
            limpiarCategoria();
            return
        }

    }

    return ( 

        <ContenedorHeader>
            <ContenedorGrid>
                <div>
                    <Parrafo>My Unsplas2</Parrafo>    
                    <Spans>Biblioteca</Spans>
                </div>             
                <DivInput>
                    <Input
                         name="busqueda"
                         type="text"
                         onKeyUp = {(e) => valorBusqueda(e) }
                         />
                </DivInput>

                <BtnDiv>
                    <Btn 
                    onClick={() => {handleOpen()}}
                    >Add Image</Btn>

                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={() => {handleClose()}}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                >
                    <Fade in={open}>
                    <div className={classes.paper}>
                       <Formulario />
                    </div>
                    </Fade>
                </Modal>

                </BtnDiv>   
            
            </ContenedorGrid>
        </ContenedorHeader>

     );
}
 
export default Header;