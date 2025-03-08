import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Checkout from './components/pages/Checkout'; // Importa Checkout
import Orders from './components/pages/Orders'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

// Cargar componentes de manera perezosa
const Home = React.lazy(() => import('./components/pages/Home'));
const About = React.lazy(() => import('./components/pages/About'));
const Contact = React.lazy(() => import('./components/pages/Contact'));
const Login = React.lazy(() => import('./components/pages/Login'));
const Register = React.lazy(() => import('./components/pages/Register'));
const Profile = React.lazy(() => import('./components/pages/Profile'));
const ProductDetail = React.lazy(() => import('./components/pages/ProductDetail'));
const Favorites = React.lazy(() => import('./components/pages/Favorites'));

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/checkout" element={<Checkout />} /> {/* Nueva ruta */}
          <Route path="/orders" element={<Orders />} /> {/* Nueva ruta */}
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;

