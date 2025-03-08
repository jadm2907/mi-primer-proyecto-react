import React from 'react';
import Card from '../Card';
import MyCarousel from '../Carousel';

const Home = () => {
  return (
    <div>
      <h1>Bienvenido a la página de Inicio</h1>
      <p>Esta es la página principal de mi aplicación React.</p>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Card
          title="Tarjeta 1"
          description="Esta es la descripción de la tarjeta 1."
          imageUrl="https://via.placeholder.com/300"
        />
        <Card
          title="Tarjeta 2"
          description="Esta es la descripción de la tarjeta 2."
          imageUrl="https://via.placeholder.com/300"
        />
        <Card
          title="Tarjeta 3"
          description="Esta es la descripción de la tarjeta 3."
          imageUrl="https://via.placeholder.com/300"
        />
      </div>
    </div>
  );
};

export default Home;