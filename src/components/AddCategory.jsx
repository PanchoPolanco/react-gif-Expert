import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => { //recibo la promesa desde el componente padre GifExpertApp
    
    const [inputValue, setInputValue] = useState(); //utilizando el hook useState para poder tener el valor que se ingresa en el input

    const onInputChanged = (event) => { //en esta funcion cambia el estado o valor del inputValue utilizando el evento de la etiqueta input 
        setInputValue(event.target.value);     //esto cada vez que se ingresa un valor por teclado que se debe especificar su ubicacion
    }

    const onSubmit = (event) => {
        event.preventDefault(); //utilizando el metodo preventDefault en el evento del formulario lo enviamos pero evitamos que se refresque y que se desaparezacan los datos 
        if(inputValue.trim().length <= 1) return;   //condicion que utilizando el metodo trim elimina los espacios al inicio y final de un texto
                                                    //el length es para saber la cantidad de caracteres dentro de una cadena y si es menor o igual a uno se sale de la funcion
        onNewCategory( inputValue.trim() ); //de lo contrario se envia el valor del inputValue a la funcion de onNewCategory 
        setInputValue(''); //se limpia la etiqueta del input esto para poder ingresar una nueva categoria
    }

    return(
        <>
        <form onSubmit={ (event) => onSubmit(event) }>
            <input 
                type="text" 
                placeholder="Buscar Gits"
                // value={ inputValue }
                onChange= { (event) => onInputChanged(event) }  //el evento onChenge se utiliza para poder realizar cambios dentro de la etiqueta de input cada vez que se cambie el valor
            />
        </form>    
        </>
    )
}