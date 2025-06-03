
import './Header.css'; 
import { Link } from 'react-router-dom';
import festifyLogo from '../../assets/festify.jpg';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={festifyLogo} alt="Festify Logo" className="logo-img" />
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Buscar eventos, artistas, locais..." />
        <button type="submit" aria-label="Buscar">🔍</button>
      </div>

      <div className="header-icons">
        <a href="#localizacao" title="Localização"><i className="fas fa-location-dot"></i></a>
        <span>Brasil</span>
        <Link to="/carrinho" title="Carrinho"><i className="fas fa-shopping-cart"></i></Link>
        <Link to="/login" className="botao">Entrar</Link>
      </div>
    </header>
  );
}

export default Header;