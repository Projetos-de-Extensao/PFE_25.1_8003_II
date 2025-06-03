import { Link } from 'react-router-dom';
import './NossosServicos.css';



function NossosServicos() {
  return (
     <section>
      <h2 className="section-title">Nossos serviços</h2>
      <div className="services-container">
        <div className="service-card">
          <i className="fas fa-calendar-alt"></i>
          <h3>Eventos</h3>
          <p>Descubra os melhores eventos da sua cidade.</p>
        </div>
        <div className="service-card">
          <i className="fas fa-music"></i>
          <h3>Música</h3>
          <p>Ouça as músicas mais tocadas do momento.</p>
        </div>
        <div className="service-card">
          <i className="fas fa-users"></i>
          <h3>Artistas</h3>
          <p>Conheça os artistas que estão bombando.</p>
        </div>
        <div className="service-card">
          <i className="fas fa-theater-masks"></i>
          <h3>Teatro</h3>
          <p>Assista a espetáculos incríveis perto de você.</p>
        </div>
        <div className="service-card">
          <i className="fas fa-glass-cheers"></i>
          <h3>Festas</h3>
          <p>As melhores festas estão aqui.</p>
        </div>
      </div>
    </section>
    
  );
}

export default NossosServicos;