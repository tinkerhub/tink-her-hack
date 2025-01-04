import React from 'react';

import imagepaper from '../assets/papertear.webp';
import yellow from '../assets/yellowimg.webp';
import white from '../assets/whiteimg.webp';
import '../styles/What.css';


function What() {
  return (
    <div className="what-container">
      <div className="what-section">
        <div className='whatone'>
        <div className="what-text">
          <p className="what-title">What is</p>
          <p className="what-subtitle">tink-her-hack?</p>
        </div>
        <div className="what-description">
          <p>
            An overnight hackathon where 4000 women across Kerala stay up all night to build their first tech projects.
            No coding experience needed—if you are curious about technology, this is your starting point.<br></br> We bring the
            hackathon closer to you through 50+ venues across Kerala, so you can join a venue near your home and spend
            one exciting night turning your ideas into real projects. With mentors to guide you and other women building
            alongside you, it's a safe space to start your tech journey.
          </p>
        </div>
        </div>
        
        <div className="what-paper-section">
          <img src={imagepaper} alt="" className="what-paper-image" />
          <p className="what-paper-text">
            Who says hackathons happen only in big cities?<br></br> Join us at a venue near you, as 4000 women across Kerala prove
            that innovation can happen anywhere. Your hometown is your <br></br><strong>MAKER HUB</strong>.
          </p>
        </div>
       
      </div>
      <div className="yearly-stats">
      
       
        <div className="stats-section yellow-section">
          <h2>2022-23</h2>
          <p>
            What started as Kerala's first women-only overnight hackathon with 500 curious minds turned into something
            bigger. <strong>Five venues</strong> lit up as women proved they could build technology, many writing their
            first lines of code.
          </p>
          <img src={yellow} alt="" className='yellow-section-img' />
        </div>
        <div className="stats-section white-section">
          <h2>2023-24</h2>
          <p>
            The spark became a movement. 1,200 women across <strong>28 venues</strong> built 300 projects in a single
            night. From college students to working professionals, they showed up, stayed up, and built up. Some landed
            tech roles, others started ventures, but all of them proved - women belong in tech.
          </p>
          <img src={white} alt="" />
        </div>
      </div>
    </div>
  );
}

export default What;
