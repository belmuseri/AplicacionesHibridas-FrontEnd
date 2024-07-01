import { useEffect, useState } from "react"
import { Link , useLocation} from "react-router-dom";

import boardBurton1 from '../assets/img/board-burton1.png';
import boardBurton2 from '../assets/img/board-burton2.png';
import boardBurton3 from '../assets/img/board-burton3.png';
import boardBurton4 from '../assets/img/board-burton4.png';
import boardBurton5 from '../assets/img/board-burton5.png';
import boardBurton6 from '../assets/img/board-burton6.png';
import boardBurton7 from '../assets/img/board-burton7.png';
import boardBurton8 from '../assets/img/board-burton8.png';

const images = {
  'board-burton1.png': boardBurton1,
  'board-burton2.png': boardBurton2,
  'board-burton3.png': boardBurton3,
  'board-burton4.png': boardBurton4,
  'board-burton5.png': boardBurton5,
  'board-burton6.png': boardBurton6,
  'board-burton7.png': boardBurton7,
  'board-burton8.png': boardBurton8,
};

const Products = (  ) => {

    const [ lista, setLista] = useState([]);
    const location = useLocation()
    const successMessage = location.state?.message;

    useEffect( ()  =>  {

        const getProduct = async () =>{
            const endPoint = 'http://localhost:3000/products';
            
            const response = await fetch(endPoint);
            const json = await response.json();
           setLista( json.data )
            console.log(json)
        }

        getProduct();

    }, [])

    return ( 
        <div className="container">
            {successMessage && <p className="mensaje-success">{successMessage}</p>}

            <h2>Productos</h2>

            <div className="products-container">
                {
                    lista.map( product => (
                        <div className="card" key={product._id}>
                            <img src={images[product.img]} alt={product.name} />

                            <h3>{ product.name }</h3>
                            <Link className="secondary-button" to={`/products/${product._id}`}> Ver Detalle </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
    }
    export default Products