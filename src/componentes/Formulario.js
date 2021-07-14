import React, { useContext } from 'react';
import imgContext from '../context/app/imgContext';
import styled from 'styled-components';
import Alerta from './Alerta';
 
const Formu = styled.form`
    display: grid;
    grid-template-columns: auto;
`;
const Label = styled.label`
    margin: 0px 0;
`;
const Input = styled.input`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 10px 0; 
    padding: 10px;
    border: 1px solid ${({mostrar}) => mostrar ? '#b51010' : '#BDBDBD'}; 
    border-radius: 8px;
    outline: none;
`;
const Seleccion = styled.select`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 10px 0; 
    padding: 10px;
    border: 1px solid ;
    border-radius: 8px;
    outline: none;
`;
const TextAREA = styled.textarea`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    width: 291px;
    height: 82px;
    margin: 10px 0; 
    padding: 10px;
    border: 1px solid #BDBDBD;
    border-radius: 8px;
    outline: none;
`;
const Btn = styled.button`
    background-color: #3DB46D;
    color: white;
    padding: 8px 8px;
    border: 2px solid #3DB46D;
    border-radius: 8px;
    transition: .2s ease-in-out;
        &:hover{
            background-color: #0c7135;
        };
`;

const Formulario = () => {

    const imgsContext = useContext (imgContext);
    const {titulo,
       nombre,
       nombre_original,
       categoria,
       subirImg,
       guardarDatos,
       agregarTitulo,
       agregarCategoria,
       agregarDescripcion,
       mostrarAlerta
       } = imgsContext;
    
    const valorInputIMG = (e) => {
        console.log(e.target.files[0]);
        const nombre = e.target.files[0].name;
        const formData = new FormData();
        formData.append('archivo', e.target.files[0])
        subirImg(formData, nombre);
    }

    const envio = (e) => {
        e.preventDefault();
        if(titulo.trim() === "" || nombre.trim() === "" || nombre_original.trim() === "" || categoria.trim() === ""){
           mostrarAlerta();
           return
        } else {
           guardarDatos();
        }
    }

    return (  

        <Formu>
        <h2 id="transition-modal-title">Agrega una imagen</h2>
        
        <Alerta />

        <Label htmlFor="nombre">Titulo</Label>
        <Input
            name="nombre"
            type="text"
            placeholder="Titulo de la imagen" 
            onChange={ (e) => agregarTitulo(e.target.value) }
        />

        <Label htmlFor="imagen">Selecciona la imagen</Label>
        <Input 
            name="imagen"
            type="file"
            onChange={ e => valorInputIMG(e) }
        />

        <Label htmlFor="categoria">Categoria</Label>
        <Seleccion name="categoria"
            onChange={(e) => agregarCategoria(e.target.value)}
        >
            <option value="">--Selecciona--</option>
            <option value="tecnologia">Tecnologia</option>
            <option value="deportes">Deportes</option>
            <option value="moda">Moda</option>
            <option value="paisajes">Paisajes</option>
            <option value="animales">Animales</option>
            <option value="leyendas">Leyendas</option>
            <option value="fantasia">Fantasia</option>
        </Seleccion>

        <Label htmlFor="descripcion">Descripcion</Label>
        <TextAREA
            name="descripcion"
            maxlength="150"
            placeholder="Agrega una descripción"
            onChange={(e) => agregarDescripcion(e.target.value)}
        ></TextAREA>

        <Btn 
            onClick={(e) => envio(e) } >Guardar
        </Btn>
        
        </Formu>
    
    );
}
 
export default Formulario;