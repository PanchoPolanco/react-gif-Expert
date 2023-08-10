import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState([ ]);// utilizo el Hook useState para cambiar el estado de las categorias que inicializa con unn valor vacio

    const onAddCategory = (newCategory) => {     
        if(categories.includes(newCategory))return; //funcion por la cual se busca poder saber si la categoria que se ingreso ya existe terminar la funcion 
        setCategories([newCategory, ...categories]);    //de lo contrario se registra en el arreglo de categorias para mostrar en pantalla
    }

    return(
        <>
            <h1>GitExpertApp</h1>
            <AddCategory    //creo un nuevo componente en el cual se realizara toda la codificacion en cuato a la buequeda de la categoria
                onNewCategory= { value => onAddCategory(value) }    //promesa que utiliza el evento dentro de la etieuta del input para poder recibir el valor recibido por teclado y poder utilizar lo que se extrae del componente de AddCategory
            />
            <button onClick={ onAddCategory }>Agregar</button>
            { 
                categories.map(category =>  //debo crear la coleccion de gifs que mostrare en pantalla para ello utiulizo el metodo map en la categoria 
                    (
                        <GifGrid key={ category } category={ category } />  //se envia el valor de la llave y categorya como una promesa al componente de GifGrid
                    )
                ) 
            }
        </>
    )
}
