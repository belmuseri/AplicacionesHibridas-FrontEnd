import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Contact from './components/Contact';
import NoFound from './components/NotFound';
import Details from './components/Details';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute';
import Private from './components/Private';
import CreateProduct from './components/CreateProduct';
import DeleteProduct from './components/DeleteProduct';

import { AuthProvider, useAuth } from './contexts/AuthContext';
import './App.css';
import logo from './assets/img/logo.svg';

function AuthButtons() {
  const { isAuthenticated } = useAuth();

  return (
    <>
      {isAuthenticated ? (
        <li><Logout /></li>
      ) : (
        <>
          <li><Link className='primary-button' to="/login">Login</Link></li>
          <li><Link className='secondary-button' to="/registro">Registro</Link></li>
        </>
      )}
    </>
  );
}

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <div className='container-nav'>
            <nav>
               <div className='container'>
                  <Link to="/">
                  <h1>
                      <img className='logo' src={logo} alt="logo de snow rent" />
                      <span> Snow Rent</span>
                  </h1>
                </Link>
                  <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/products">Productos</Link></li>
                    <li><Link to="/protected">Admin Panel</Link></li>
                    {/* <li><Link to="/admin">Admin</Link></li> */}
                    {/* <li><Link to="/delete-product">Eliminar Producto</Link></li> */}

                    <AuthButtons />
                  </ul>
               </div>
            </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="products/:id" element={<Details />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registro" element={<Register />} />
              <Route path="/protected" element={<ProtectedRoute element={Private} />} />
              <Route path="/create-product" element={<CreateProduct />} />
              <Route path="/delete-product" element={<DeleteProduct />} />
              <Route path="*" element={<NoFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AuthProvider>

      <footer >
        <p className='container'>TP2 Aplicaciones Híbridas 2024 - Belen Museri</p>
      </footer>
    </>
  );
}

export default App;
