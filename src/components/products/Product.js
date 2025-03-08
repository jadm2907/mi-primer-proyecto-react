import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <motion.div
      className="product"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h2>
        <Link to={`/product/${product.id}`}>{product.name}</Link> {/* Enlace al detalle */}
      </h2>
      <p>{product.price} $</p>
      <button onClick={() => addToCart(product)}>Añadir al carrito</button>
    </motion.div>
  );
};

export default Product;