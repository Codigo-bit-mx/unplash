
import {
    AGREGAR_IMG,
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
}
 from '../../types/index';
/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */

export default (state, action) => {
    switch(action.type) {
        
        case SUBIR_IMAGEN: 
            return {
                ...state,
                cargando: true,
            }

        case SUBIR_IMAGEN_EXITO:
            return {
                ...state,
                nombre: action.payload.nombre,
                nombre_original: action.payload.nombre_original,
                ruta: action.payload.ruta,
                cargando: true
            }

        case AGREGAR_TITULO:
            return {
                ...state,
                titulo: action.payload
            }

        case OBTENER_IMAGENES:
            return {
                ...state,
                imagenes: action.payload,
                cargando: false,
            }

        case OBTENER_CATEGORIA: 
            return {
                ...state,
                arreglobus: action.payload,
                busqueda: true
            }
        
        case ELIMINAR_IMAGEN:
            return {
                ...state,
                cargando: true,
                arreglobus: state.arreglobus.filter(bus => bus._id !== action.payload)
            }

        case AGREGAR_CATEGORIA:
            return {
                ...state,
                categoria: action.payload
            }
        
        case AGREGAR_DESCRIPCION: 
            return {
                ...state,
                descripcion: action.payload
            }

        case AGREGAR_IMG: 
            return{
                ...state,
                nombre_original: action.payload
            }

        case MOSTRAR_ALERTA: 
            return{
                ...state,
                alerta: true
            }

        case LIMPIAR_ALERTA: 
            return{
                ...state,
                alerta: false
            }

        case LIMPIAR_ESTADOS:
            return{
                ...state,
                titulo: '',
                nombre: '',
                nombre_original: '',
                categoria: '',
                descripcion: '',
                ruta: '',
                cargando: null
            }
        
        case LIMPIAR_ESTADO_BUSQUEDA:
            return{
                ...state,
                busqueda: false
            }
        
        default: 
             return state;
    }
}