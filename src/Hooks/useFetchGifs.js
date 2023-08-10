import { useState, useEffect } from 'react';
import { getGifs } from "../helpers/GetGifs";

export const UseFetchGifs = (category) =>{
    const [images, setImages] = useState([]);   //useState para poder almacenar las imagenes que pertenescan a esa categoria 

    const getImagnes = async() => {
        const newImages = await getGifs(category);  //de la fincion getGifs del conponente del mismo nombre traemos los datos obtenidos desde la API de gifs
        setImages(newImages);   //guardar las imagenes pertenecientes a esa categoria 
    }
    
    useEffect(() => {   //es un Hook que esta siendo utilizado para que dentro de la consola sole se renderice una vez a penas tenga el primer valor el arreglo
        getImagnes();
    }, [])

    return{
        images, //retornara las imagenes de la categoria
        isLoading: true //mietras esten cargadas todas la imagenes tendra un valor verdadero
    }
}