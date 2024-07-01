import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const CreateProduct = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: "",
    img: "",
    description: ""
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!user || !user._id) {
        setErrorMessage("El usuario no esta logueado o el ID no fue encontrado");
        return;
      }

      const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('jwt')}`
        },
        body: JSON.stringify({ ...formData }),
      });

      const json = await response.json();
      if (json.message === 'ok') {
        console.log("Producto creado exitosamente");
        navigate('/products', { state: { message: "Producto creado exitosamente" } }); 

      } else {
        setErrorMessage("Error al crear el producto");
      }
    } catch (error) {
      setErrorMessage("Error en el servidor");
      console.error("Error:", error);
    }
  };

  return (
    <div className="container">
      <h2>Crear Nuevo Producto</h2>
      <form className='form' onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="price">Precio</label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <label htmlFor="stock">Stock</label>
        <input
          type="number"
          id="stock"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          required
        />

        <label htmlFor="img">URL de Imagen</label>
        <input
          type="text"
          id="img"
          name="img"
          value={formData.img}
          onChange={handleChange}
        />

        <label htmlFor="img">Descripcion</label>  
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <button className='primary-button' type="submit">Crear Producto</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default CreateProduct;

