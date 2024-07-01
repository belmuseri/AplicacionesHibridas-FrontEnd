import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const DeleteProduct = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/products');
        const json = await response.json();
        setProducts(json.data);
      } catch (error) {
        setErrorMessage("Error fetching products");
        console.error("Error:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleDelete = async (productId) => {
    try {
      if (!user || !user._id) {
        setErrorMessage("El usuario no está logueado o el ID no fue encontrado");
        return;
      }

      const response = await fetch(`http://localhost:3000/products/${productId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        }
      });

      const json = await response.json();
      if (response.ok) {
        setProducts(products.filter(product => product._id !== productId));
        setSuccessMessage("Producto eliminado correctamente");
      } else {
        setErrorMessage(json.message || "Error al eliminar el producto");
      }
    } catch (error) {
      setErrorMessage("Error en el servidor");
      console.error("Error:", error);
    }
  };

  return (
    <div className="container">
      <h2>Eliminar Producto</h2>
      {errorMessage && <p className="mensaje-error">{errorMessage}</p>}
      {successMessage && <p className="mensaje-success">{successMessage}</p>}
      <div className="products-container">
        {products.map(product => (
          <div className="card" key={product._id}>
            <h4>{product.name}</h4>
            <button className="primary-button" onClick={() => handleDelete(product._id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeleteProduct;
