// GearItemCard.js
import React from 'react';
import './GearItemCard.css';

function GearItemCard({ image, title, price }) {
  return (
    <div className="gear-card">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>${price}</p>
    </div>
  );
}

export default GearItemCard;
