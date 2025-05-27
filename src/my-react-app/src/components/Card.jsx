import React from 'react';
import './Card.css'; 

function Card({ imageUrl, altText, title, location, date, price }) {
  return (
    <div className="event-card">
      <img src={imageUrl} alt={altText} />
      <h3>{title}</h3>
      <p>{location}</p>
      <p>{date}</p>
      {price && <p>{price}</p>} 
    </div>
  );
}

export default Card;