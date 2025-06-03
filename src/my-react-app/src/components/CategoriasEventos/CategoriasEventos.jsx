import { Link } from 'react-router-dom';
import './CategoriasEventos.css'; // Import the CSS file for styling

function CategoriasEventos() {
  return (
    <section className="container">
      <h2>Categorias de Eventos</h2>
      <div className="grid">
        <div className="card" style={{ backgroundImage: "url('musica.jpg')" }}>
          <div className="info">
            <h3>Música e Shows</h3>
            <p>257 eventos</p>
          </div>
        </div>
        <div className="card" style={{ backgroundImage: "url('negocios.jpg')" }}>
          <div className="info">
            <h3>Negócios e Networking</h3>
            <p>189 eventos</p>
          </div>
        </div>
        <div className="card" style={{ backgroundImage: "url('tecnologia.jpg')" }}>
          <div className="info">
            <h3>Tecnologia</h3>
            <p>134 eventos</p>
          </div>
        </div>
        <div className="card" style={{ backgroundImage: "url('gastronomia.jpg')" }}>
          <div className="info">
            <h3>Gastronomia</h3>
            <p>97 eventos</p>
          </div>
        </div>
        <div className="card" style={{ backgroundImage: "url('esportes.jpg')" }}>
          <div className="info">
            <h3>Esportes</h3>
            <p>215 eventos</p>
          </div>
        </div>
        <div className="card" style={{ backgroundImage: "url('festas.jpg')" }}>
          <div className="info">
            <h3>Festas e Celebrações</h3>
            <p>178 eventos</p>
          </div>
        </div>
        <div className="card" style={{ backgroundImage: "url('educacao.jpg')" }}>
          <div className="info">
            <h3>Educação e Cursos</h3>
            <p>153 eventos</p>
          </div>
        </div>
        <div className="card" style={{ backgroundImage: "url('arte.jpg')" }}>
          <div className="info">
            <h3>Arte e Cultura</h3>
            <p>88 eventos</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategoriasEventos;