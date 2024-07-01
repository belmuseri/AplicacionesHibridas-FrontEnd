import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      const response = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await response.json();
      if (json.data && json.data.token && json.data.user) {
        const token = json.data.token;
        const user = json.data.user;
        login(token, user);

        navigate("/protected", { state: { message: "Te has logueado con éxito" } });
        console.log("Datos correctos");
      } else {
        setErrorMessage("Credenciales inválidas");
        console.error("Credenciales inválidas");
      }
      console.log(json);
    } catch (error) {
      setErrorMessage("Error en el servidor");
      console.error("Error:", error);
    }
  };

  return (
    <div className="login-form container container-height">
      <h2>Login</h2>
      {errorMessage && <div className="mensaje-error-login">{errorMessage}</div>}
      <form className="form" onSubmit={handleSubmit}>
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

        <button className="primary-button" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;


