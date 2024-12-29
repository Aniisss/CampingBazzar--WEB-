import React, { useRef } from 'react';
import './welcomePage.css';   
function WelcomePage({ onExploreClick }) {

  return (
    <div className="welcome-page">
      {/* Background Overlay */}
      <div className="overlay">
        <div className="welcome-content text-center">
          <h1 className="display-3">Welcome to Camping Bazzar</h1>
          <p className="lead">
            Discover the best camping gear, plan your adventures, and connect with fellow enthusiasts.
          </p>
          <div className="buttons">
            {/* Use button to trigger scrolling */}
            <button
              onClick={onExploreClick}
              className="btn btn-warning btn-lg me-3"
            >
              Explore Now
            </button>
            <a href="/login" className="btn btn-outline-light btn-lg">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
    
  );
}   
export default WelcomePage;
