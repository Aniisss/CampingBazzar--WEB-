import React from 'react';
import Header from '../header/header'
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div>
      <Header /> 
      <div className="about-us">
        <div className="about-us-banner">
          <h1>About Us</h1>
          <p>Your gateway to outdoor adventure</p>
        </div>
        <div className="about-us-content">
          <section className="about-section">
            <h2>Welcome to [Your Site Name]!</h2>
            <p>
              At [Your Site Name], we are passionate about the great outdoors and everything that comes with it. Our mission is to create a vibrant community where camping enthusiasts can buy, sell, and discuss the best camping gear available. Whether you're a seasoned adventurer or just starting out, we aim to provide you with the tools and knowledge you need for your next outdoor adventure.
            </p>
          </section>

          <section className="story-section">
            <h2>Our Story</h2>
            <p>
              Founded in [Year], [Your Site Name] was born out of a love for camping and a desire to connect like-minded individuals. We noticed a gap in the market for a dedicated platform where campers could not only purchase high-quality gear but also share their experiences and tips. Thus, [Your Site Name] was created to fill that void.
            </p>
          </section>

          <section className="offer-section">
            <h2>What We Offer</h2>
            <ul>
              <li>
                <strong>Quality Gear:</strong> We offer a wide range of camping equipment from trusted brands, ensuring you have the best gear for your adventures.
              </li>
              <li>
                <strong>Community Discussions:</strong> Our forums are a place for campers to exchange stories, advice, and recommendations. Whether you need tips on the best hiking trails or advice on setting up a tent, our community is here to help.
              </li>
              <li>
                <strong>Buy & Sell:</strong> Our marketplace allows users to buy and sell new and used camping gear, making it easy to find what you need or pass on gear you no longer use.
              </li>
            </ul>
          </section>

          <section className="commitment-section">
            <h2>Our Commitment</h2>
            <p>
              We are committed to providing exceptional customer service and fostering a supportive community. Our team is always here to assist you with any questions or concerns you may have. We believe in the power of the outdoors to bring people together and create unforgettable experiences.
            </p>
          </section>

          <section className="join-us-section">
            <h2>Join Us</h2>
            <p>
              Become a part of the [Your Site Name] community today! Whether you're looking to gear up for your next trip, share your camping stories, or connect with fellow outdoor enthusiasts, we welcome you to join us on this adventure.
            </p>
            <p>Happy Camping!</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
