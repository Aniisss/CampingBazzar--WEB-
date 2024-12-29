import React, { useState } from "react";
import "./GearSection.css";
import { useNavigate } from "react-router-dom";

function GearSection() {
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();
  const handleExploreGear = () => {
    navigate("/gears");
  };

  const gearItems = [
    {
      id: 1,
      name: "Tent",
      category: "Shelter",
      imageUrl: "/assets/CampingTent.jpg",
      description: "Durable camping tents for all weather.",
      seller: {
        name: "John Doe",
        contact: "johndoe@example.com",
        location: "New York, USA",
      },
    },
    {
      id: 2,
      name: "Sleeping Bag",
      category: "Sleep",
      imageUrl: "/assets/sleeping-bag.jpg",
      description: "Comfortable and warm sleeping bags.",
      seller: {
        name: "Jane Smith",
        contact: "janesmith@example.com",
        location: "Los Angeles, USA",
      },
    },
    // Additional gear items...
  ];

  const handleCardDetails = (item) => {
    setSelectedItem(item); // Open the modal with selected item details
  };

  const closeModal = () => {
    setSelectedItem(null); // Close the modal
  };

  return (
    <section className="gear-section">
      <div className="gear-section-content">
        <h2 className="gear-section-title">Camping Gear Services</h2>
        <p className="gear-section-description">
          Explore a wide range of camping gear. Whether you need durable tents,
          cozy sleeping bags, or reliable lighting, we have it all.
        </p>

        <div className="gear-items">
          {gearItems.map((item) => (
            <div key={item.id} className="gear-card">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="gear-card-image"
              />
              <h3 className="gear-card-title">{item.name}</h3>
              <p className="gear-card-category">{item.category}</p>
              <p className="gear-card-description">{item.description}</p>
              <button
                className="gear-card-details-btn"
                onClick={() => handleCardDetails(item)}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>

        {selectedItem && (
          <div className="gear-modal">
            <div className="gear-modal-content1">
              <button className="gear-modal-close1" onClick={closeModal}>
                &times;
              </button>
              <img
                src={selectedItem.imageUrl}
                alt={selectedItem.name}
                className="gear-modal-image1"
              />
              <h3 className="gear-modal-title">{selectedItem.name}</h3>
              <p className="gear-modal-category">
                Category: {selectedItem.category}
              </p>
              <p className="gear-modal-description">
                {selectedItem.description}
              </p>
              <div className="gear-seller-info">
                <h4>Seller Information:</h4>
                <p>Name: {selectedItem.seller.name}</p>
                <p>Contact: {selectedItem.seller.contact}</p>
                <p>Location: {selectedItem.seller.location}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <button className="explore-all-btn" onClick={handleExploreGear}>
        View All Gear
      </button>
    </section>
  );
}

export default GearSection;
