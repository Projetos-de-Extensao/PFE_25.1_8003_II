import React from 'react';
import './Header.css'; 
import { Link } from 'react-router-dom'

function Header() {
  return (
     <header class="header">
    <div class="logo">
      <img src="festify.jpg" alt="Festify Logo" class="logo-img" />
    </div>

    <div class="search-bar">
      <input type="text" placeholder="Buscar eventos, artistas, locais..." />
      <button type="submit" aria-label="Buscar">🔍</button>
    </div>

    <div class="header-icons">
      <a href="#localizacao" title="Localização"><i class="fas fa-location-dot"></i></a>
      <span>Brasil</span>
      <a href="carrinho.html" title="Carrinho"><i class="fas fa-shopping-cart"></i></a>
      <a href="login.html" class="botao">Entrar</a>
    </div>
  </header>
  );
}

export default Header;