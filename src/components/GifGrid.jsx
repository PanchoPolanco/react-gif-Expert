// import { useState, useEffect } from 'react';
// import { getGifs } from '../helpers/GetGifs';
import { GifItem } from './GifItem';
import { UseFetchGifs } from '../Hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
    
    const { images, isLoading } = UseFetchGifs(category);
    // const [images, setImages] = useState([]);

    // const getImagnes = async() => {
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
    // }
    
    // useEffect(() => {
    //     getImagnes();
    // }, [])

    return(
        <>
        
            <h3>{ category }</h3>
            {
                isLoading && (<h2>Cargando...</h2>) //condicion para mostrar cuando las imagenes no han terminado de cargar
            }
            <div className='card-grid'>
                {
                    images.map(imag => (
                        <GifItem 
                            key={ imag.id }
                            { ...imag }
                        />
                    ))
                }
            </div>
        </>
    )
}






{/* lLh3xv1BeSC2ntASPnfD6iC2gESWQDAu */}