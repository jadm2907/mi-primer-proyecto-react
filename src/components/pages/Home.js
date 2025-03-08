import React, { useState } from 'react';
import Product from '../products/Product';
import Cart from '../products/Cart';
import SearchBar from '../SearchBar';

const Home = () => {
  const [products] = useState([
    { id: 1, name: 'Producto 1', price: 10 },
    { id: 2, name: 'Producto 2', price: 20 },
    { id: 3, name: 'Producto 3', price: 30 },
    { id: 4, name: 'Producto 4', price: 40 },
    { id: 5, name: 'Producto 5', price: 50 },
    { id: 6, name: 'Producto 6', price: 60 },
  ]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 3; // Número de productos por página

  const handleSearch = (query) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
    setCurrentPage(1); // Reiniciar a la primera página después de buscar
  };

  // Calcular los productos a mostrar en la página actual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Bienvenido a la Tienda</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="products">
        {currentProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }, (_, i) => (
          <button key={i + 1} onClick={() => paginate(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
      <Cart />
    </div>
  );
};

export default Home;