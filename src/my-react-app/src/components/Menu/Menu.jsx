import { Link } from 'react-router-dom';
import './Menu.css';

function Menu() {
  return (
    <nav className="menu-categorias">
      <ul>
        <li><Link to="/explorar">Explorar</Link></li>
        <li><Link to="/categorias">Categorias</Link></li>
        <li><Link to="/criar-evento">Criar Evento</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;