import { Link } from 'react-router-dom';
import './NossosServicos.css';



function NossosServicos() {
  return (
     <section>
      <h2 class="section-title">Nossos serviços</h2>
      <div class="services-container">
        <div class="service-card">
          <i class="fas fa-calendar-alt"></i>
          <h3>Eventos</h3>
          <p>Descubra os melhores eventos da sua cidade.</p>
        </div>
        <div class="service-card">
          <i class="fas fa-music"></i>
          <h3>Música</h3>
          <p>Ouça as músicas mais tocadas do momento.</p>
        </div>
        <div class="service-card">
          <i class="fas fa-users"></i>
          <h3>Artistas</h3>
          <p>Conheça os artistas que estão bombando.</p>
        </div>
        <div class="service-card">
          <i class="fas fa-theater-masks"></i>
          <h3>Teatro</h3>
          <p>Assista a espetáculos incríveis perto de você.</p>
        </div>
        <div class="service-card">
          <i class="fas fa-glass-cheers"></i>
          <h3>Festas</h3>
          <p>As melhores festas estão aqui.</p>
        </div>
      </div>
    </section>
    
  );
}

export default NossosServicos;