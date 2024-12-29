import React from "react";
import "./ExploreAppSection.css";

function ExploreAppSection() {
  return (
    <section className="explore-app-section">
      <div className="container">
        <h2 className="explore-app-title">Explore Our Mobile App</h2>
        <p className="explore-app-description">
          Experience the ultimate camping companion in the palm of your hand. Discover new camping gear, track your adventures, and shop directly from the app.
        </p>

        <div className="app-features">
          <div className="feature">
            <img src="assets\tracking.png" alt="App Feature 1" className="feature-img" />
            <h3>Track Your Gear</h3>
            <p>Stay on top of your gear collection with easy tracking features.</p>
          </div>
          <div className="feature">
            <img src="assets\shopping.png" alt="App Feature 2" className="feature-img" />
            <h3>Easy Shopping</h3>
            <p>Shop for your camping essentials in seconds.</p>
          </div>
          <div className="feature">
            <img src="assets\recom.jpg" alt="App Feature 3" className="feature-img" />
            <h3>Personalized Recommendations</h3>
            <p>Get personalized gear suggestions based on your needs.</p>
          </div>
        </div>

        <div className="download-section">
          <p>Ready to take your camping experience to the next level?</p>
          <div className="download-buttons">
            <a href="#" className="download-btn google-play">
              <img src="assets\google-play.png" alt="Google Play" />
              Download on Google Play
            </a>
            <a href="#" className="download-btn app-store">
              <img src="assets\app-store.png" alt="App Store" />
              Download on the App Store
            </a>
          </div>
        </div>  
      </div>
    </section>
  );
}

export default ExploreAppSection;
