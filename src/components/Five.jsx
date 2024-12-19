import React from 'react';
import image from '../assets/Frame2.png';
import image1 from '../assets/power.jpg';
import image3 from '../assets/image3.jpg';
import imageone from '../assets/imageone.png';
import imagetwo from '../assets/imagetwo.png';
import imagethree from '../assets/imagethree.png';
import imagefour from '../assets/imagefour.png';
import '../styles/Five.css'; // Import CSS file

function Five() {
  return (
    <div className="five-container" style={{ backgroundImage: `url(${image})` }}>
      <div className="five-content">
        <div className="five-section-1">
          <h2 className="five-title-1">Breaking entry barriers</h2>
          <ul className="five-list">
            <li>Brings tech opportunities to local communities</li>
            <li>Creates safe spaces for first-time builders</li>
            <li>Removes travel and accessibility concerns</li>
            <li>Provides guided first exposure to technology</li>
          </ul>
        </div>
        <div className="five-images-1">
          <img src={imagetwo} alt="" className="image-layer image-layer-two" />
          <img src={image1} alt="" className="image-main-1" />
          <img src={imageone} alt="" className="image-layer image-layer-one" />
        </div>
        <div className="five-images-2">
          <img src={imagethree} alt="" className="image-layer image-layer-three" />
          <img src={imagefour} alt="" className="image-layer image-layer-four" />
          <img src={image3} alt="" className="image-main-2" />
        </div>
        <div className="five-section-2">
          <h2 className="five-title-2">The power of numbers</h2>
          <ul className="five-list">
            <li>4000 women building together creates momentum</li>
            <li>80 venues means local support systems</li>
            <li>Peer learning boosts confidence</li>
            <li>Creates visible role models in every community</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Five;
