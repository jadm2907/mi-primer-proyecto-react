import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/'); // Redirige a la página de inicio después del logout
  };

  return (
    <div>
      <h1>Perfil de Usuario</h1>
      {user ? (
        <>
          <p>Bienvenido, {user.email}!</p>
          <button onClick={handleLogout}>Cerrar Sesión</button>
        </>
      ) : (
        <p>No has iniciado sesión.</p>
      )}
    </div>
  );
};

export default Profile;