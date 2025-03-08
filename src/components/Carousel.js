import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Estilos del carrusel

const MyCarousel = () => {
  return (
    <Carousel>
      <div>
        <img src="https://via.placeholder.com/800x400" alt="Imagen 1" />
        <p className="legend">Leyenda de la imagen 1</p>
      </div>
      <div>
        <img src="https://via.placeholder.com/800x400" alt="Imagen 2" />
        <p className="legend">Leyenda de la imagen 2</p>
      </div>
      <div>
        <img src="https://via.placeholder.com/800x400" alt="Imagen 3" />
        <p className="legend">Leyenda de la imagen 3</p>
      </div>
    </Carousel>
  );
};

export default MyCarousel;