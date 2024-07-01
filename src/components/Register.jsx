import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [successMessage, setSuccessMessage] = useState(""); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Usuario creado:", result);
        setSuccessMessage("El usuario ha sido creado con éxito"); 
        // Reset form
        setFormData({ name: "", email: "", password: "" });
      } else {
        console.error("Usuario no creado");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container container-height">
      <h2>Registrarme</h2>
      {successMessage && <p className="mensaje-success">{successMessage}</p>}
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button className="primary-button" type="submit">Registrarme</button>
      </form>
    </div>
  );
};

export default Register;
