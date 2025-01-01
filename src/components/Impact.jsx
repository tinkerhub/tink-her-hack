import React from 'react';
import backimg from '../assets/Frame4.webp';
import '../styles/Impact.css'; 

function Impact() {
  return (
    <div className="impact-container">
      <div 
        className="impact-background" 
        style={{ backgroundImage: `url(${backimg})` }}
      >
        <div className="impact-header">
          <p>Proven Impact</p>
        </div>
        <div className="impact-stats">
          <div className="impact-stat">
            <h1>90%</h1>
            <p>
              Participants sought mentorship. This is evidence that mentorship is a 
              huge need. Consider scalable solutions that TinkerHub can provide 
              to solve this need.
            </p>
          </div>
          <div className="impact-stat">
            <h1>40% +</h1>
            <p>
              Participants reported that they came across 3+ new technology tools 
              during the Hackathon.
            </p>
          </div>
          <div className="impact-stat">
            <h1>34%</h1>
            <p>
              Participants reported a significant boost in confidence regarding 
              their technical skills after the Hackathon.
            </p>
          </div>
          <div className="impact-stat">
            <h1>71% +</h1>
            <p>
              Women participated in a Hackathon for the first time.
            </p>
          </div>
          <div className="impact-stat">
            <h1>90%</h1>
            <p>
              Participants learned at least one new tech tool during the Hackathon.
            </p>
          </div>
        </div>
        <div className="impact-footer">
          <p>*From MnE survey across 1104 participants</p>
        </div>
      </div>
    </div>
  );
}

export default Impact;
