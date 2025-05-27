import React from 'react';
import './Menu.css'; 
import { Link } from 'react-router-dom'

function Menu() {
  return (
  <nav class="menu-categorias">
    <ul>
      <li><a href="explorar.html">Explorar</a></li>
      <li><a href="categorias.html">Categorias</a></li>
      <li><a href="criar-evento.html">Criar Evento</a></li>
    </ul>
  </nav>
  );
}

export default Menu;