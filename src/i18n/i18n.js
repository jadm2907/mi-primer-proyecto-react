import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Traducciones en diferentes idiomas
const resources = {
  en: {
    translation: {
      welcome: 'Welcome',
      about: 'About Us',
      contact: 'Contact',
      login: 'Login',
      register: 'Register',
    },
  },
  es: {
    translation: {
      welcome: 'Bienvenido',
      about: 'Acerca de Nosotros',
      contact: 'Contacto',
      login: 'Iniciar Sesión',
      register: 'Registrarse',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'es', // Idioma por defecto
  fallbackLng: 'es', // Idioma de respaldo
  interpolation: {
    escapeValue: false, // No escapar valores (por ejemplo, para HTML)
  },
});

export default i18n;