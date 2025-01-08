import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css'; // Import the CSS file
import image from '../assets/Frame1.webp';
import image2 from '../assets/heroimg.webp';
import image3 from '../assets/count.webp';
import badge from '../assets/badge.webp';
import logo from '../assets/logo.webp';

function Hero() {
   
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="hero-container">
      <div
        className="hero-background"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="hero">
          <div className="hero-registrations">
            <h1>Registrations from Jan 10th</h1>
            <button>APPLY NOW</button>
          </div>
        </div>
        <nav className="hero-nav">
          <div className="nav-toggle" onClick={toggleNav}>
            <div className="toggle-bar"></div>
            <div className="toggle-bar"></div>
            <div className="toggle-bar"></div>
          </div>
          <ul className={`nav-links ${isNavOpen ? 'open' : ''}`}>
            <Link style={{textDecoration:'none'}} to='/'>
            <li>Home</li>
            </Link>
            <Link style={{textDecoration:'none'}} to='/actions'>
            <li>Actions</li>
            </Link>
           <Link style={{textDecoration:'none'}}>
           <li>Participants</li>
           </Link>
           
          </ul>
        </nav>

        <div className="hero-content">
          <img src={logo} alt="logo" className="hero-logo" />
          <h1 style={{ margin: '0' }}>TINK-HER-HACK 3.0</h1>
          <p style={{}}>Kerala's Largest Hackathon for Girls</p>
        </div>
        <div className="hero-statistics">
          <div className="hero-image-container">
            <img src={image3} alt="count" className="hero-count-image" />
            <div className="hero-stats-text">
              <p>
                4000 girls <br /> 1 night of making
              </p>
            </div>
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
