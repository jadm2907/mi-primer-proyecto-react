import React from 'react';
import ReactDOM from 'react-dom/client';// Usamos createRoot de React 18
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';// Importamos el AuthProvider

// Creamos la raíz usando createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizamos la aplicación envuelta en AuthProvider y StrictMode
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
      <App />
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
