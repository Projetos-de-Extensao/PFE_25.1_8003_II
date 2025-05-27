import React from 'react';
import ServiceCard from './ServiceCard'; 
import './ServicesSection.css'; 

function ServicesSection() {
  const services = [
    { icon: "fas fa-calendar-alt", title: "Eventos", description: "Descubra os melhores eventos da sua cidade." },
    { icon: "fas fa-music", title: "Música", description: "Ouça as músicas mais tocadas do momento." },
    { icon: "fas fa-users", title: "Artistas", description: "Conheça os artistas que estão bombando." },
    { icon: "fas fa-users", title: "Teatro", description: "Conheça os artistas que estão bombando." },
    { icon: "fas fa-users", title: "Festas", description: "Conheça os artistas que estão bombando." },
  ];

  return (
    <main>
      <h2 className="section-title">Nossos serviços</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <ServiceCard
            key={index} 
            iconClass={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </main>
  );
}

export default ServicesSection;