import React from "react";
import "./GearIntroduction.css";

function GearIntroduction() {
  return (
    <section className="gear-introduction">
      <div className="gear-intro-overlay"></div>
      <div className="container">
        <h2 className="introduction-title">Why Choose Our Camping Gear?</h2>
        <p className="introduction-text">
          Our gear is designed with quality, durability, and comfort in mind.
          Whether you're a first-time camper or an experienced adventurer, we
          cater to all your needs.
        </p>
        <div className="features-list">
          <div className="feature-item">
            <i className="icon quality-icon"></i>
            <p>High-Quality Materials</p>
          </div>
          <div className="feature-item">
            <i className="icon durability-icon"></i>
            <p>Durable & Reliable</p>
          </div>
          <div className="feature-item">
            <i className="icon comfort-icon"></i>
            <p>Comfort & Ease of Use</p>
          </div>
        </div>
        <div className="down-indicator">
          <span>↓ Explore Gear Below ↓</span>
        </div>
      </div>
    </section>
  );
}

export default GearIntroduction;
