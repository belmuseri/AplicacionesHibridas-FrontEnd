// Actua como protector de Rutas
import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
// Decide si muestra el componente o redirige al login
const ProtectedRoute = ( { element: Component, ...rest } ) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? <Component {...rest } /> : <Navigate to="/login" />;
}

export default ProtectedRoute