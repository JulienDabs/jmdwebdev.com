import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../DarkMode/DarkModeContext';
import './Navbar.css';

function Navbar() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const language = localStorage.getItem('language') || 'en';
  const home = language === 'fr' ? 'Page d\'accueil' : 'Home';
  const about = language === 'fr' ? 'A propos' : 'About';
  const contact = language === 'fr' ? 'Me contacter' : 'Contact Me';

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className={`navbar ${darkMode ? 'dark' : 'light'}`}>
      <div className="navbar-container">
        
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fa fa-times' : 'fa fa-bars'}></i>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>{home}</Link>
          </li>
          <li className="nav-item">
            <Link to="/About" className="nav-links" onClick={closeMobileMenu}>{about}</Link>
          </li>
          <li className="nav-item">
            <Link to="/Contact" className="nav-links" onClick={closeMobileMenu}>{contact}</Link>
          </li>
        </ul>
        <i className={`fa ${darkMode ? 'fa-sun-o' : 'fa-moon-o'}`} onClick={toggleDarkMode}></i>
      </div>
    </nav>
  );
}

export default Navbar;
