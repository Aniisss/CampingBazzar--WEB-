import React, { useState } from "react";
import "./GearSection.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function GearSection() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [gearItems, setGearItems] = useState([]);
  const navigate = useNavigate();
  const handleExploreGear = () => {
    navigate("/gears");
  };

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const createdAt = new Date(timestamp * 1000); // Convert seconds to milliseconds
    const diffInSeconds = Math.floor((now - createdAt) / 1000);
  
    if (diffInSeconds < 60) {
      return `${diffInSeconds} second${diffInSeconds === 1 ? '' : 's'} ago`;
    }
  
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
      return `${diffInMinutes} minute${diffInMinutes === 1 ? '' : 's'} ago`;
    }
  
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours === 1 ? '' : 's'} ago`;
    }
  
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays} day${diffInDays === 1 ? '' : 's'} ago`;
  };

  useEffect(() => {
    const fetchGearItems = async () => {
      try {
        const response = await fetch("http://20.64.237.50:3000/api/items/getItems");
        const data = await response.json();
  
        const transformedItems = data.items.map((item, index) => ({
          id: item.itemID,
          name: item.title,
          category: item.category,
          imageUrl: item.image,
          description: item.description,
          seller: {
            name: item.userName,
            contact: item.email,
            location: "Tunisia",
          },
          created: formatTimeAgo(item.createdAt._seconds),
        }));
  
        const firstFiveItems = transformedItems.slice(0, 5);
        setGearItems(firstFiveItems);
      } catch (error) {
        console.error("Error fetching gear items:", error);
      }
    };
  
    fetchGearItems();
  }, []);

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
              <p className="gear-card-created"> Created: {item.created}</p>
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
