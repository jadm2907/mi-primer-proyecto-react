import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/about">Acerca de</Link>
        </li>
        <li>
          <Link to="/contact">Contacto</Link>
        </li>
        <li>
          <Link to="/login">Iniciar Sesión</Link> {/* Enlace al login */}
        </li>
        <li>
          <Link to="/register">Registrarse</Link> {/* Enlace al registro */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;