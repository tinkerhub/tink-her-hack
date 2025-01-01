import React from 'react';
import image from '../assets/glimpse.webp'; 
import '../styles/Previous.css'; 

function Previous() {
  return (
    <div className="previous-container">
      <div className="previous-content">
        <img 
          src={image} 
          alt="A glimpse from the previous edition" 
          className="previous-image" 
        />
        <p className="previous-text">A glimpse from Previous edition</p>
      </div>
    </div>
  );
}

export default Previous;
