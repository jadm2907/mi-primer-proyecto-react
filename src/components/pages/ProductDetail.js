import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams(); // Obtener el ID del producto desde la URL
  const products = [
    { id: 1, name: 'Producto 1', price: 10, description: 'Descripción del Producto 1' },
    { id: 2, name: 'Producto 2', price: 20, description: 'Descripción del Producto 2' },
    { id: 3, name: 'Producto 3', price: 30, description: 'Descripción del Producto 3' },
  ];

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Precio: {product.price} €</p>
      <p>Descripción: {product.description}</p>
    </div>
  );
};

export default ProductDetail;