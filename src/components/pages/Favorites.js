import React, { useContext } from 'react';
import { FavoritesContext } from '../../context/FavoritesContext'; // Ruta corregida
import Product from '../products/Product';

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div>
      <h1>Mis Favoritos</h1>
      {favorites.length === 0 ? (
        <p>No tienes productos favoritos.</p>
      ) : (
        <div className="products">
          {favorites.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;