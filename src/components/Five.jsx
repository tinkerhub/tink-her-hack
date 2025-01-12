import React from 'react';
import image from '../assets/Frame2.webp';
import image1 from '../assets/power.webp';
import image3 from '../assets/image3.webp';
import imageone from '../assets/imageone.webp';
import imagetwo from '../assets/imagetwo.webp';
import imagethree from '../assets/imagethree.webp';
import imagefour from '../assets/imagefour.webp';
import '../styles/Five.css'; 

function Five() {
  return (
    <div
      className="five-container"
      style={{ backgroundImage: `url(${image})` }}
    >
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
          <img
            src={imagetwo}
            alt=""
            className="image-layer image-layer-two"
            loading="lazy"
          />
          <img
            src={image1}
            alt=""
            className="image-main-1"
            loading="lazy"
          />
          <img
            src={imageone}
            alt=""
            className="image-layer image-layer-one"
            loading="lazy"
          />
        </div>
        <div className="five-images-2">
          <img
            src={imagethree}
            alt=""
            className="image-layer image-layer-three"
            loading="lazy"
          />
          <img
            src={imagefour}
            alt=""
            className="image-layer image-layer-four"
            loading="lazy"
          />
          <img
            src={image3}
            alt=""
            className="image-main-2"
            loading="lazy"
          />
        </div>
        <div className="five-section-2">
          <h2 className="five-title-2">The power of numbers</h2>
          <ul className="five-list">
            <li>4000 women building together creates momentum</li>
            <li>80 venues means local support systems</li>
            <li>Peer learning boosts confidence by 34%</li>
            <li>200+ mentors helping students build their first project</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Five;
