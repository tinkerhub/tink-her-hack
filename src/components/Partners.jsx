import React from 'react';
import one from '../assets/1.png';
import two from '../assets/2.png';
import three from '../assets/wielogo.jpg';
import four from '../assets/4.png';
import five from '../assets/5.png';
import six from '../assets/6.png';
import '../styles/Partners.css';

function Partners() {
  return (
    <div className="partners-container">      
      <div>
        <div className="partners-title-container">
          <h1 className="partners-title">Our Partners So Far</h1>
        </div>
       
        <div className="partners-grid">
          <img src={one} alt="Partner 1" className="partner-logo" />
          <img src={two} alt="Partner 2" className="partner-logo" />
          <img src={three} alt="Partner 3" className="partner-logo" />
          <img src={four} alt="Partner 4" className="partner-logo" />
          <img src={five} alt="Partner 5" className="partner-logo" />
          <img src={six} alt="Partner 6" className="partner-logo" />
        </div>
      </div>
    </div>
  );
}

export default Partners;
