import React from 'react';
import EventCard from './Card'; 
import './Carrossel.css'; 

function Carrossel() {
  
  const events = [
    { id: 1, imageUrl: "/teatro1.jpg", altText: "Figa Festival", title: "Evento 1", location: "Plaza Shopping", date: "1 de maio de 2025", price: "150 R$" },
    { id: 2, imageUrl: "/teatro1.jpg", altText: "Suba Jovem", title: "Evento 1", location: "Joá", date: "2 de maio de 2025", price: "220 R$" },
    { id: 3, imageUrl: "/teatro1.jpg", altText: "Evento 3", title: "Evento 1", location: "Joá", date: "2 de maio de 2025", price: "100 R$" },
    { id: 4, imageUrl: "/teatro1.jpg", altText: "Evento 4", title: "Evento 1", location: "Joá", date: "2 de maio de 2025", price: "130 R$" },
    { id: 5, imageUrl: "/teatro1.jpg", altText: "Evento 5", title: "Evento 1", location: "Joá", date: "2 de maio de 2025", price: "350 R$" },
    { id: 6, imageUrl: "/teatro1.jpg", altText: "Evento 6", title: "Evento 1", location: "Joá", date: "2 de maio de 2025" }, // Sem preço
    { id: 7, imageUrl: "/teatro1.jpg", altText: "Evento 7", title: "Evento 1", location: "Joá", date: "2 de maio de 2025" }, // Sem preço
    { id: 8, imageUrl: "/teatro1.jpg", altText: "Evento 8", title: "Evento 1", location: "Joá", date: "2 de maio de 2025" }, // Sem preço
  ];

 
  return (
    <section className="event-carousel">
      <div className="header-carousel">
        <h2>Não fique de fora!</h2>
        <a href="#">Ver todos &gt;&gt;&gt;</a>
      </div>

      <div className="carousel-wrapper">
        <button className="nav prev">&#8249;</button>

        <div className="carousel" id="carousel">
          {events.map(event => (
            <EventCard
              key={event.id} 
              imageUrl={event.imageUrl}
              altText={event.altText}
              title={event.title}
              location={event.location}
              date={event.date}
              price={event.price}
            />
          ))}
        </div>

        <button className="nav next">&#8250;</button>
      </div>
    </section>
  );
}

export default Carrossel;