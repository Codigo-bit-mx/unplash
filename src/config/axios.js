import axios from "axios";

const clienteAxios = axios.create({
    baseURL : 'https://myunplash-2021.herokuapp.com/'
});

export default clienteAxios;