import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // Simulamos una autenticación exitosa
    setUser({ email });
    alert(`Bienvenido, ${email}`);
  };

  const logout = () => {
    setUser(null);
    alert('Has cerrado sesión.');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};