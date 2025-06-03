import React from 'react';
import './DepoimentosSection.css'; 

function DepoimentosSection() {
  return (
    <section>
      <h2 className="section-title">Depoimentos</h2>
      <div className="testimonials-container">
        <div className="testimonial-card">
          <div className="stars">
            <i className="fas fa-star"></i><i className="fas fa-star"></i>
            <i className="fas fa-star"></i><i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <p>"Profissionalismo do início ao fim. O evento foi um sucesso!"</p>
        </div>
        <div className="testimonial-card">
          <div className="stars">
            <i className="fas fa-star"></i><i className="fas fa-star"></i>
            <i className="fas fa-star"></i><i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <p>"A equipe foi atenciosa desde o primeiro contato. Incrível!"</p>
        </div>
        <div className="testimonial-card">
          <div className="stars">
            <i className="fas fa-star"></i><i className="fas fa-star"></i>
            <i className="fas fa-star"></i><i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <p>"A estrutura do evento superou nossas expectativas."</p>
        </div>
      </div>
    </section>
  );
}

export default DepoimentosSection;