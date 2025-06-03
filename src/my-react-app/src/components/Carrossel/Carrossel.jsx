import { Link } from 'react-router-dom';
import './Carrossel.css';
import teatro1 from '../../assets/teatro1.jpg';
import { useState, useEffect } from 'react';

function Carrossel() {
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEventosData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('http://localhost:3001/events');

        if (!response.ok) {
          throw new Error('Eventos não encontrados');
        }

        const data = await response.json();
        setEventos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEventosData();
  }, []);

  return (
    <section className="event-carousel">
      <div className="header-carousel">
        <h2>Não fique de fora!</h2>
        <a href="#">Ver todos &gt;&gt;&gt;</a>
      </div>

      <div className="carousel-wrapper">
        <button className="nav prev" aria-label="Anterior">&#8249;</button>
        <div className="carousel" id="carousel">
          {loading && <div>Carregando eventos...</div>}
          {error && <div>Erro: {error}</div>}
          {!loading && !error && eventos.map((evento) => (
            <div className="event-card" key={evento.id}>
              <img src={teatro1} alt={evento.name} />
              <h3>{evento.name}</h3>
              <p>{evento.location}</p>
              <p>{evento.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Carrossel;