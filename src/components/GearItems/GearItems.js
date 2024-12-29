// GearItems.js
import React from 'react';
import GearItemCard from '../GearItemCard/GearItemCard';
import './GearItems.css'; // Styles for scrolling layout

function GearItems() {
    
  const items = [
    { id: 1, image: '/assets/CampingTent.jpg', title: 'Camping Tent', price: '199.99' },
    { id: 2, image: '/assets/Hikingbackpack.jpg', title: 'Hiking Backpack', price: '129.99' },
    { id: 3, image: '/assets/Lantern.jpg', title: 'LED Lantern', price: '39.99' },
    { id: 4, image: '/assets/stove.jpg', title: 'Portable Stove', price: '89.99' },
    { id: 5, image: '/assets/sleeping-bag.jpg', title: 'Sleeping Bag', price: '59.99' },
    { id: 6, image: '/images/sleeping-bag.jpg', title: 'Sleeping Bag', price: '59.99' },
    { id: 7, image: '/images/sleeping-bag.jpg', title: 'Sleeping Bag', price: '59.99' },
    
    // Add more items as needed
  ];

  return (
    <div className="gear-items">
      <h3 className="section-title">Our Top Camping Gear</h3>
      <div className="scroll-container">
        {items.map((item) => (
          <GearItemCard
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default GearItems;
