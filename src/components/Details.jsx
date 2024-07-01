// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom"
// import boardBurton1 from '../assets/img/board-burton1.png';
// import boardBurton2 from '../assets/img/board-burton2.png';
// import boardBurton3 from '../assets/img/board-burton3.png';
// import boardBurton4 from '../assets/img/board-burton4.png';
// import boardBurton5 from '../assets/img/board-burton5.png';
// import boardBurton6 from '../assets/img/board-burton6.png';
// import boardBurton7 from '../assets/img/board-burton7.png';
// import boardBurton8 from '../assets/img/board-burton8.png';

// const images = {
//   'board-burton1.png': boardBurton1,
//   'board-burton2.png': boardBurton2,
//   'board-burton3.png': boardBurton3,
//   'board-burton4.png': boardBurton4,
//   'board-burton5.png': boardBurton5,
//   'board-burton6.png': boardBurton6,
//   'board-burton7.png': boardBurton7,
//   'board-burton8.png': boardBurton8,
// };

// const Details = (  ) => {

//     const {id} = useParams();
//     const [product, setProduct] = useState(null);

//     useEffect( ()  =>  {
//             const getProduct = async () =>{
//                 const endPoint = `http://localhost:3000/products/${id}`;
//                 const response = await fetch(endPoint);
//                 const json = await response.json();
//                 console.log(json);
//                 setProduct(json.data);
//         }

//         getProduct();
 
//     }, [id])

//     return ( 
//         <div className="container">
//             <div className="card card-detalle">
//                <div className="card-detalle-titulo">
//                     <h2> { product?.name }</h2>
//                     <p>
//                     {product?.description } 
//                     </p>
//                     <div className="stock">
//                      Stock: <span>{product?.stock } </span>
//                     </div>
//                     <div className="stock">
//                      Precio: <span>{product?.price } USD</span>
//                     </div>
//                </div>
//                <div>
//                     <img src={images[product.img]} alt={product.name} />
//                </div>
//             </div>
//         </div>
//     )
//     }
//     export default Details

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      const endPoint = `http://localhost:3000/products/${id}`;
      const response = await fetch(endPoint);
      const json = await response.json();
      console.log(json);
      setProduct(json.data);
    };

    getProduct();
  }, [id]);

  if (!product) {
    return <div className="container">Cargando...</div>;
  }

  return (
    <div className="container">
      <div className="card card-detalle">
        <div className="card-detalle-titulo">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <div className="stock">
            Stock: <span>{product.stock}</span>
          </div>
          <div className="stock">
            Precio: <span>{product.price} USD</span>
          </div>
        </div>
        <div>
          <img src={images[product.img]} alt={product.name} />
        </div>
      </div>
    </div>
  );
};

export default Details;
