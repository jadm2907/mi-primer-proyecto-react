import React from 'react';
import ReactDOM from 'react-dom/client';// Usamos createRoot de React 18
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import { FavoritesProvider } from './context/FavoritesContext';
import { OrderProvider } from './context/OrderContext';
import { ToastContainer } from 'react-toastify'; // Importa ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Importa los estilos 
import './i18n/i18n'; 

// Creamos la raíz usando createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizamos la aplicación envuelta en AuthProvider y StrictMode
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <CartProvider>
          <FavoritesProvider>
            <OrderProvider> {/* Envuelve la aplicación con OrderProvider */}
              <App />
              <ToastContainer /> {/* Agrega ToastContainer */}
            </OrderProvider>
          </FavoritesProvider>
        </CartProvider>
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);

// Opcional: Medición de rendimiento (puedes mantenerlo o eliminarlo)
reportWebVitals();
/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/
