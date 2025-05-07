import React from 'react';
import { Link } from 'react-router-dom';
import destinations from '../data/destinations';
import './Home.css';

function Home() {
  return (
    <div className="container">
      <h1 className="page-title">Explore Beautiful Destinations</h1>
      
      <div className="hero">
        <div className="hero-content">
          <h2>Welcome to our Travel Blog</h2>
          <p>Discover amazing places around the world, get inspiration for your next adventure, and learn about different cultures and traditions.</p>
        </div>
      </div>
      
      <div className="destinations">
        <h2 className="section-title">Featured Destinations</h2>
        <div className="destinations-grid">
          {destinations.map(destination => (
            <div className="destination-card" key={destination.id}>
              <div className="destination-image">
                <img src={destination.image} alt={destination.title} />
              </div>
              <div className="destination-info">
                <h3>{destination.title}</h3>
                <p>{destination.description}</p>
                <Link to={`/destination/${destination.id}`} className="btn">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="cta-section">
        <div className="cta-content">
          <h2>Ready for your next adventure?</h2>
          <p>Subscribe to our newsletter and get travel tips, destination guides, and exclusive offers directly to your inbox.</p>
          <form className="subscribe-form">
            <input type="email" placeholder="Your email address" />
            <button type="submit" className="btn">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;