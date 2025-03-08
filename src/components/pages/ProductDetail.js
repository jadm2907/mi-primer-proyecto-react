import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewForm from '../products/ReviewForm';

const ProductDetail = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const products = [
    { id: 1, name: 'Producto 1', price: 500, description: 'Descripción del Producto 1' },
    { id: 2, name: 'Producto 2', price: 1000, description: 'Descripción del Producto 2' },
    { id: 3, name: 'Producto 3', price: 5000, description: 'Descripción del Producto 3' },
  ];

  const product = products.find((p) => p.id === parseInt(id));

  const handleReviewSubmit = (review) => {
    setReviews([...reviews, review]);
  };

  if (!product) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Precio: {product.price} €</p>
      <p>Descripción: {product.description}</p>
      <h2>Valoraciones</h2>
      {reviews.length === 0 ? (
        <p>No hay valoraciones aún.</p>
      ) : (
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>
              <p>Valoración: {'★'.repeat(review.rating)}</p>
              <p>Comentario: {review.comment}</p>
            </li>
          ))}
        </ul>
      )}
      <ReviewForm productId={product.id} onSubmit={handleReviewSubmit} />
    </div>
  );
};

export default ProductDetail;