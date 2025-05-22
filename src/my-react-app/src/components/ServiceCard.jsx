import React from 'react';
import './ServiceCard.css';

function ServiceCard({ iconClass, title, description }) {
  return (
    <div className="service-card">
      <i className={iconClass}></i>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;