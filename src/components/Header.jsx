import React, { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close menu on link click (mobile)
  };

  return (
    <header>
      <div className="nav-container">
        <a href="#" className="logo">
          <span className="logo-text">Vivek Photography</span>
        </a>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#" onClick={handleLinkClick}>Home</a></li>
          <li><a href="#services" onClick={handleLinkClick}>Services</a></li>
          <li><a href="#portfolio" onClick={handleLinkClick}>Portfolio</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
        </ul>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;