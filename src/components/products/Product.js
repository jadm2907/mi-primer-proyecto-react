import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { FavoritesContext } from '../../context/FavoritesContext'; // Ruta corregida
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoritesContext);
  const isFavorite = favorites.some((item) => item.id === product.id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <motion.div
      className="product"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h2>
        <Link to={`/product/${product.id}`}>{product.name}</Link>
      </h2>
      <p>{product.price} €</p>
      <button onClick={() => addToCart(product)}>Añadir al carrito</button>
      <button onClick={handleFavoriteClick}>
        {isFavorite ? '❤️ Quitar de favoritos' : '🤍 Añadir a favoritos'}
      </button>
    </motion.div>
  );
};

export default Product;