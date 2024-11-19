import React from 'react';
import './home.css';

function WelcomePage() {
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
            <a href="/explore" className="btn btn-warning btn-lg me-3">
              Explore Now
            </a>
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
