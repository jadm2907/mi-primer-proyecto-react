import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <ul>
        <li>
          <Link to="/">{t('welcome')}</Link>
        </li>
        <li>
          <Link to="/about">{t('about')}</Link>
        </li>
        <li>
          <Link to="/contact">{t('contact')}</Link>
        </li>
        <li>
          <Link to="/login">{t('login')}</Link>
        </li>
        <li>
          <Link to="/register">{t('register')}</Link>
        </li>
      </ul>
      <button onClick={toggleTheme}>
        Cambiar a {isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
      </button>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('es')}>Español</button>
    </nav>
  );
};

export default Navbar;