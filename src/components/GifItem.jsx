export const GifItem = ({ title, url }) => {    //importo el titulo y la url del gif de forma desesttructurada para poder utilizarlo, desde el GifGrid

    return(
        <div className="card">
            <img src={ url } alt={ title } />
            <p>{ title }</p> 
        </div>
        // <li key={ imag.id }>{imag.title}</li>
    )
}