import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Verificar si hay un usuario en localStorage al cargar la aplicación
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email, password) => {
    const userData = { email };
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData)); // Guardar en localStorage
    alert(`Bienvenido, ${email}`);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Eliminar de localStorage
    alert('Has cerrado sesión.');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};