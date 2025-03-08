import React, { useState } from 'react';

const ReviewForm = ({ productId, onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ productId, rating, comment });
    setRating(0);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Valoración:</label>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            type="button"
            key={star}
            onClick={() => setRating(star)}
            style={{ color: star <= rating ? 'gold' : 'gray' }}
          >
            ★
          </button>
        ))}
      </div>
      <div>
        <label>Comentario:</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </div>
      <button type="submit">Enviar Valoración</button>
    </form>
  );
};

export default ReviewForm;