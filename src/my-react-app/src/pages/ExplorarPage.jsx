import React from 'react';
import { Link } from 'react-router-dom'; 
import festifyLogo from '../assets/festify.jpg'; 
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/"> {}
            <img src={festifyLogo} alt="Festify Logo" className="logo-img" />
        </Link>
      </div>
      <div className="header-icons">
        <Link to="/carrinho" title="Carrinho">
          <i className="fas fa-shopping-cart"></i>
        </Link>
        <a href="#localizacao" title="Localização"> {}
          <i className="fas fa-location-dot"></i>
        </a>
      </div>
    </header>
  );
}

export default Header;