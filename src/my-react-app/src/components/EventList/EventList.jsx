

import React from 'react';
import './EventList.css';
import teatro1 from '../../assets/teatro1.jpg'; 


function EventList({ events }) {
  return (
    <main className="event-list-container">
      {events.length > 0 ? (
        <div className="event-grid">
          {events.map(event => (
            <div className="event-card" key={event.id}>
              <img src={teatro1} alt={event.name} />
              <h3>{event.name}</h3>
              <p>{event.location}</p>
              <p>{new Date(event.date).toLocaleDateString('pt-BR')}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Nenhum evento encontrado com os filtros selecionados.</p>
      )}
    </main>
  );
}

export default EventList;