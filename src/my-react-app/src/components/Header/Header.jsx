
import './Header.css'; 
import { Link } from 'react-router-dom';
import festifyLogo from '../../assets/festify.jpg';
import SearchBar from '../SearchBar/SearchBar';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={festifyLogo} alt="Festify Logo" className="logo-img" />
      </div>

      <SearchBar/>

      <div className="header-icons">
        
         <Link to="/Explorar" className="botao">Explorar</Link>
        <a href="#localizacao" title="Localização"><i className="fas fa-location-dot"></i></a>
        <span>Brasil</span>
        <Link to="/carrinho" title="Carrinho"><i className="fas fa-shopping-cart"></i></Link>
        <Link to="/login" className="botao">Entrar</Link>
      </div>
    </header>
  );
}

export default Header;