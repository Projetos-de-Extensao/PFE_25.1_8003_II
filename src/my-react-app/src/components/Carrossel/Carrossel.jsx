import { Link } from 'react-router-dom';
import './Carrossel.css';
import teatro1 from '../../assets/teatro1.jpg';

function Carrossel() {
  return ( 
    <section className="event-carousel">
      <div className="header-carousel">
        <h2>Não fique de fora!</h2>
        <a href="#">Ver todos &gt;&gt;&gt;</a>
      </div>

      <div className="carousel-wrapper">
        <button className="nav prev" aria-label="Anterior">&#8249;</button>
        <div className="carousel" id="carousel">
          {/* Cartões de Evento (exemplo) */}
          <div className="event-card">
            <img src={teatro1} alt="Figa Festival" />
            <h3>Evento 1</h3>
            <p>Plaza Shopping</p>
            <p>1 de maio de 2025</p>
            <p>R$ 150</p>
          </div>

          {/* Repetição padronizada */}
          <div className="event-card">
            <img src={teatro1} alt="Suba Jovem" />
            <h3>Evento 2</h3>
            <p>Joá</p>
            <p>2 de maio de 2025</p>
            <p>R$ 220</p>
          </div>

          <div className="event-card">
            <img src={teatro1} alt="Suba Jovem" />
            <h3>Evento 2</h3>
            <p>Joá</p>
            <p>2 de maio de 2025</p>
            <p>R$ 220</p>
          </div>

          <div className="event-card">
            <img src={teatro1} alt="Suba Jovem" />
            <h3>Evento 2</h3>
            <p>Joá</p>
            <p>2 de maio de 2025</p>
            <p>R$ 220</p>
          </div>

          <div className="event-card">
            <img src={teatro1} alt="Suba Jovem" />
            <h3>Evento 2</h3>
            <p>Joá</p>
            <p>2 de maio de 2025</p>
            <p>R$ 220</p>
          </div>

          <div className="event-card">
            <img src={teatro1} alt="Suba Jovem" />
            <h3>Evento 2</h3>
            <p>Joá</p>
            <p>2 de maio de 2025</p>
            <p>R$ 220</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carrossel;