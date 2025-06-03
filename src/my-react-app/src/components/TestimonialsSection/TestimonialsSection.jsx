import React from 'react';
import TestimonialCard from './TestimonialCard/TestimonialCard'; 
import './TestimonialsSection.css'; 

function TestimonialsSection() {
  const testimonials = [
    "Profissionalismo do início ao fim. O evento foi um sucesso e deixou uma impressão duradoura em todos os participantes. Certamente trabalharemos juntos novamente.",
    "Não poderíamos estar mais felizes com nossa escolha. A equipe foi atenciosa desde o primeiro contato e tornou nosso dia especial verdadeiramente mágico.",
    "A organização foi impecável, a estrutura do evento superou nossas expectativas. Recomendo fortemente a todos que buscam excelência!",
  ];

  return (
    <main>
      <h2 className="section-title">Depoimentos</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} text={testimonial} />
        ))}
      </div>
    </main>
  );
}

export default TestimonialsSection;