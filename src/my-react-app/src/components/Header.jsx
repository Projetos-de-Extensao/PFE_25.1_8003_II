import React from 'react';
import './Header.css'; 

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/festify.jpg" alt="Festify Logo" className="logo-img" />
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Buscar eventos, artistas, locais..." />
        <button type="submit">🔍</button>
      </div>

      <div className="header-icons">
        <a href="#localizacao" title="Localização"><i className="fas fa-location-dot"></i></a>
        <span>Brasil</span>
        <a href="carrinho.html" title="Carrinho"><i className="fas fa-shopping-cart"></i></a>
        <a href="login.html" title="Login"><i className="fas fa-user"></i></a>
      </div>
    </header>
  );
}

export default Header;