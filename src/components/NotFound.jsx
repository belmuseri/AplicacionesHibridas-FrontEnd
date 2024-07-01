
import { useNavigate } from "react-router-dom"

const NoFound = (  ) => {
    // Para cambiar la ruta desde el código
    const navegacion = useNavigate();

    const goToHome = () => {
        navegacion('/');
    }

    return ( 
        <div className="container">
            <h2> Páginas no encontra</h2>
            <p>
                Upss... parece que hay un error en el link
            </p>
            <button onClick={goToHome} type="button">  Ir al Inicio </button>
        </div>
    )
    }
export default NoFound