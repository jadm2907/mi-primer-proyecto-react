import React, { useState } from 'react';
import Card from '../Card';
import MyCarousel from '../Carousel';
import Product from '../products/Product';
import Cart from '../products/Cart';
import SearchBar from '../SearchBar';

const Home = () => {
    const products = [
        { id: 1, name: 'Producto 1', price: 500 },
        { id: 2, name: 'Producto 2', price: 1000 },
        { id: 3, name: 'Producto 3', price: 5000 },
    ];
    const [filteredProducts, setFilteredProducts] = useState(products);
  
    const handleSearch = (query) => {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    };
  
    return (
      <div>
        <h1>Bienvenido a la Tienda</h1>
        <SearchBar onSearch={handleSearch} />
        <div className="products">
          {filteredProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        <Cart />
      </div>
    );
  };
  
  export default Home;