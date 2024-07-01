import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  }

  return (
    <button className='primary-button' onClick={handleLogout} type="button">Logout</button>
  );
}

export default Logout;

