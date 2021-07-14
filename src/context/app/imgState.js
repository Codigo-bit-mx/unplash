import React, {useReducer} from 'react';
import imgContext from './imgContext';
import imgReducer from './imgReducer';

import {
    SUBIR_IMAGEN,
    SUBIR_IMAGEN_EXITO,
    OBTENER_IMAGENES,
    OBTENER_CATEGORIA,
    ELIMINAR_IMAGEN,
    AGREGAR_TITULO,
    AGREGAR_CATEGORIA,
    AGREGAR_DESCRIPCION,
    MOSTRAR_ALERTA,
    LIMPIAR_ALERTA,
    LIMPIAR_ESTADOS,
    LIMPIAR_ESTADO_BUSQUEDA
} from '../../types/index';

import clienteAxios from '../../config/axios';

const ImgState = props => {

    const initialState = {
            imagenes: [],
            titulo: '',
            nombre: '',
            nombre_original: '',
            categoria: '',
            descripcion: '',
            ruta: '',
            cargando: null,
            alerta:  false,
            arreglobus: [],
            busqueda: false
    }
    
    const [state, dispatch] = useReducer(imgReducer, initialState);

    const subirImg = async (formData, nombreImg) => {
        // console.log(nombreImg);
        dispatch({
            type: SUBIR_IMAGEN
        });

    try {
        const resultado = await clienteAxios.post('/api/uploads', formData);
        console.log(resultado);
        dispatch({
            type: SUBIR_IMAGEN_EXITO,
            payload: {
                nombre: resultado.data.archivo,
                nombre_original: nombreImg,
                ruta: resultado.data.ruta 
            }
        })
    } catch (error) {
        console.log(error);    
    }
    }

    const guardarDatos = async() => {
        const data = {
            titulo: state.titulo,
            nombre: state.nombre,
            nombre_original: state.nombre_original,
            categoria: state.categoria,
            descripcion: state.descripcion,
            ruta: state.ruta,
            cargando: state.cargando
        }
        try{
            const resultado = await clienteAxios.post('/api/url', data)
            console.log(resultado);
            dispatch({
                type: LIMPIAR_ESTADOS
            })
        }catch(error){
            console.log(error);
        }
    } 

    const obtenerImgs = async() => {
        try {
            const imags = await clienteAxios.get('/api/url');
            
            dispatch({
                type: OBTENER_IMAGENES,
                payload: imags.data.datos
            })
        } catch (error) {   
            console.log(error);
        }
    }

    const obtenerCategoria = async (categoria) => {        
        try {
            const imgCategoria = await clienteAxios.get(`api/url/${categoria}`);
            dispatch({
                type: OBTENER_CATEGORIA,
                payload: imgCategoria.data.datos
            });

        } catch (error) {
            console.log(error);
        }
    }

    const eliminarImg = async(imagen) => {
        const {_id } = imagen;
        try {
            const dato = await clienteAxios.put(`api/url/${_id}`, imagen);
            console.log(dato);
            dispatch({
                type: ELIMINAR_IMAGEN,
                payload: _id
            })
        } catch (error) {
            console.log(error);        
        }
    }

    const limpiarCategoria = () => {
        dispatch({
            type: LIMPIAR_ESTADO_BUSQUEDA
        })
    }

    const agregarTitulo = titulo => { 
        dispatch({
            type: AGREGAR_TITULO,
            payload: titulo
        })
    }

    const agregarCategoria = categoria => {
        dispatch({
            type: AGREGAR_CATEGORIA,
            payload: categoria
        })
    }

    const agregarDescripcion = descripcion => {
        dispatch({
            type: AGREGAR_DESCRIPCION,
            payload: descripcion
        });
    }

    const mostrarAlerta = () => {
        dispatch({
            type: MOSTRAR_ALERTA
        });

        setTimeout(() => {
            dispatch({
                type: LIMPIAR_ALERTA
            })
        }, 3000);
    }

    return (
        <imgContext.Provider
            value={{
                imagenes: state.imagenes,
                titulo: state.titulo,
                nombre: state.nombre,
                nombre_original: state.nombre_original,
                categoria: state.categoria,
                descripcion: state.descripcion,
                cargando: state.cargando,
                alerta: state.alerta,
                arreglobus: state.arreglobus,
                busqueda: state.busqueda,
                subirImg,
                agregarTitulo,
                agregarCategoria,
                agregarDescripcion,
                guardarDatos,
                mostrarAlerta,
                obtenerImgs,
                obtenerCategoria,
                eliminarImg,
                limpiarCategoria
                
            }}
        >
        
            {props.children}
        </imgContext.Provider>
    );
    
}

export default ImgState;

