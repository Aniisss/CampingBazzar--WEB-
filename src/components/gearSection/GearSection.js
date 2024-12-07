import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './GearSection.css';

function GearSection() {
  const navigate = useNavigate(); // Use React Router for navigation

  // Simulated gear data with image URLs
  const gearItems = [
    { id: 1, name: 'Tent', category: 'Shelter', imageUrl: '/assets/CampingTent.jpg' },
    { id: 2, name: 'Sleeping Bag', category: 'Sleep', imageUrl: '/assets/sleeping-bag.jpg' },
    { id: 3, name: 'Camping Stove', category: 'Cooking', imageUrl: '/assets/stove.jpg' },
    { id: 4, name: 'Headlamp', category: 'Lighting', imageUrl: 'https://via.placeholder.com/150?text=Headlamp' },
    { id: 5, name: 'Backpack', category: 'Storage', imageUrl: '/assets/HikingBackpack.jpg' },
    { id: 6, name: 'Camping Chair', category: 'Comfort', imageUrl: 'https://via.placeholder.com/150?text=Camping+Chair' },
  ];

  const handleExploreMore = () => {
    navigate('/gears'); // Redirect to the Gear Page
  };

  return (
    <div className="gear-section">
      <div className="gear-section-content">
        <h2 className="gear-section-title">Camping Gear Services</h2>
        <p className="gear-section-description">
          Whether you’re looking to sell your gently used camping equipment or buy high-quality gear for your next adventure, 
          we’ve got you covered. Browse some of our featured items below or explore the full collection.
        </p>

        {/* Featured Gear Items */}
        <div className="gear-items">
          {gearItems.map((item) => (
            <div key={item.id} className="gear-card1">
              <img src={item.imageUrl} alt={item.name} className="gear-card-image" />
              <h3>{item.name}</h3>
              <p>{item.category}</p>
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <button className="explore-service-btn" onClick={handleExploreMore}>
          Learn More & Explore Gear
        </button>
      </div>
    </div>
  );
}

export default GearSection;
