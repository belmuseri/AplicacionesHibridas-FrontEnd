// import { createContext, useState, useContext, useEffect } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ( { children } ) => {
//     const [ isAuthenticated, setIsAuthenticated ] = useState( false ) // por default el user no accede al content sin estar autenticado

//     useEffect(() => {
//         const token = localStorage.getItem('jwt');
//         if (token) {
//           console.log('Estamos logueados');
//           setIsAuthenticated(true);
//         } else {
//           console.log('No estamos logueados :(');
//         }
//     }, []);

      
//     const login = (token) => {
//         localStorage.setItem('jwt', token);
//         setIsAuthenticated(true);
//     };
    
//     const logout = () => {
//         localStorage.removeItem('jwt');
//         setIsAuthenticated(false);
//     };

//     return (
//         <AuthContext.Provider value={ { isAuthenticated, login, logout } }>
//             { children }
//         </AuthContext.Provider>
//     )
// }

// export const useAuth = () =>{
//     return useContext( AuthContext )
// }


import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    const userData = localStorage.getItem('user');
    if (token && userData) {
      setUser(JSON.parse(userData));
      setIsAuthenticated(true);
    } else {
      console.log('No estamos logueados :(');
    }
  }, []);

  const login = (token, userData) => {
    localStorage.setItem('jwt', token);
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};


