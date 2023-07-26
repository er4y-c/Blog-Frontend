import React, { createContext, useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import jwt2 from 'jwt-decode';

import { auth_services } from '../services/auth';

const AuthContext = createContext();


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const publicRoutes = ["/", "/login", "/blogs"];

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const decodedToken = jwt2(token);
      if (decodedToken && decodedToken.exp > Date.now() / 1000) {
        setUser(decodedToken?.user);
      } else {
        logout();
      }
    }

    if(!token && !publicRoutes.includes(router.pathname)) {
       router.replace("/");
    }
  }, [router.pathname]);

  const login = async(email, password) => {
    const { token } = await auth_services.login(email, password);
    Cookies.set('token', token, { expires: 30 })
    const decodedToken = jwt2(token);
    if (decodedToken && decodedToken.exp > Date.now() / 1000) {
      setUser(decodedToken.user);
      router.replace("/dashboard")
    }
  };

  const logout = () => {
    Cookies.remove('token');
    Cookies.remove('user-info');
    setUser(null);
    router.replace('/');
  };

  const context = {
    user,
    login,
    logout
  }
  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
