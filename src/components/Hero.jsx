import React from 'react';
import '../styles/Hero.css'; // Import the CSS file
import image from '../assets/Frame1.jpg';
import image2 from '../assets/heroimg.png';
import image3 from '../assets/count.png';
import badge from '../assets/badge.png';
import logo from '../assets/logo.png';

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-background" style={{ backgroundImage: `url(${image})` }}>
        <div className='hero'>
        <div className="hero-registrations">
          <h1>Registrations from Jan 5th</h1>
          <button>APPLY NOW</button>
        </div>

        </div>
     
        <div className="hero-content">
          <img src={logo} alt="logo" className="hero-logo" />
          <h1>TINK-HER-HACK 3.0</h1>
          <p style={{}}>Kerala's Largest Hackathon for Girls</p>
        </div>
        <div className="hero-statistics">
          <img src={image3} alt="count" className="hero-count-image" />
          <div className="hero-stats-text">
            <p>4000 girls <br /> 1 night of making</p>
          </div>
          <div className="hero-images">
            <img src={badge} alt="badge" className="hero-badge" />
            <img src={image2} alt="hero" className="hero-main-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
