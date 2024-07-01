import { useLocation, Link } from "react-router-dom";

const Private = (  ) => {
    const location = useLocation();
    const message = location.state?.message;

    return ( 
        <>
         <div className="mensaje-login container">
            {message && <p>{message}</p>} 
         </div>
        <div className="container container-height">
            <h2>Admin Panel</h2>
            <div className="admin-buttons">
            <Link to="/create-product" className="button-admin">Crear Producto</Link>
            <Link to="/delete-product" className="button-admin">Eliminar Producto</Link>
            <Link to="/edit-user" className="button-admin">Editar Usuario</Link>
            <Link to="/change-password" className="button-admin">Cambiar Contraseña</Link>
            </div>
        </div>
        </> 
    )
}
export default Private