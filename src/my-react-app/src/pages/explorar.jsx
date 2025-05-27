import React from 'react';
import { Link } from 'react-router-dom'; // Para links de navegação
import festifyLogo from '../assets/festify.jpg'; // Importando a imagem
import './Header.css'; // Crie ou adapte seu CSS

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/"> {/* Link para a Home */}
            <img src={festifyLogo} alt="Festify Logo" className="logo-img" />
        </Link>
      </div>
      <div className="header-icons">
        <Link to="/carrinho" title="Carrinho">
          <i className="fas fa-shopping-cart"></i>
        </Link>
        <a href="#localizacao" title="Localização"> {/* Manter como 'a' se for âncora */}
          <i className="fas fa-location-dot"></i>
        </a>
      </div>
    </header>
  );
}

export default Header;