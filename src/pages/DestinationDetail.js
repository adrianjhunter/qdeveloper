import React from 'react';
import { useParams, Link } from 'react-router-dom';
import destinations from '../data/destinations';
import './DestinationDetail.css';

function DestinationDetail() {
  const { id } = useParams();
  const destination = destinations.find(dest => dest.id === parseInt(id));

  if (!destination) {
    return (
      <div className="container error-container">
        <h2>Destination not found</h2>
        <p>Sorry, we couldn't find the destination you're looking for.</p>
        <Link to="/" className="btn">Return to Home</Link>
      </div>
    );
  }

  return (
    <div className="destination-detail">
      <div className="destination-hero" style={{ backgroundImage: `url(${destination.image})` }}>
        <div className="container">
          <h1>{destination.title}</h1>
        </div>
      </div>
      
      <div className="container">
        <div className="destination-content">
          <div className="destination-description">
            <h2>About {destination.title}</h2>
            {destination.longDescription.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            
            <Link to="/" className="btn back-btn">
              Back to All Destinations
            </Link>
          </div>
          
          <div className="destination-sidebar">
            <div className="destination-info-box">
              <h3>Quick Facts</h3>
              <ul className="quick-facts">
                <li><strong>Location:</strong> {destination.title}</li>
                <li><strong>Best Time to Visit:</strong> Year-round, but Spring and Fall offer the best weather</li>
                <li><strong>Known For:</strong> Cultural heritage, natural beauty, local cuisine</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="destination-gallery">
          <h2>Photo Gallery</h2>
          <div className="gallery-grid">
            {destination.gallery.map((image, index) => (
              <div className="gallery-item" key={index}>
                <img src={image} alt={`${destination.title} - Gallery Image ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        
        <div className="other-destinations">
          <h2>Other Destinations You May Like</h2>
          <div className="other-destinations-grid">
            {destinations.filter(dest => dest.id !== parseInt(id))
              .slice(0, 2)
              .map(dest => (
                <div className="destination-card" key={dest.id}>
                  <div className="destination-image">
                    <img src={dest.image} alt={dest.title} />
                  </div>
                  <div className="destination-info">
                    <h3>{dest.title}</h3>
                    <p>{dest.description.substring(0, 100)}...</p>
                    <Link to={`/destination/${dest.id}`} className="btn">
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationDetail;