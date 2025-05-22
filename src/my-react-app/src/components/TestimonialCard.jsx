import React from 'react';
import './TestimonialCard.css'; 

function TestimonialCard({ text }) {
  return (
    <div className="testimonial-card">
      <div className="stars">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
      </div>
      <p>"{text}"</p>
    </div>
  );
}

export default TestimonialCard;