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
        {/* 🔹 New summary section */}
        <div className="impact-summary">
          <h2 className="impact-summary-title">TinkHerHack 3.0 Impact</h2>

          <div className="impact-summary-grid">
            <div className="impact-summary-item">
              <h3>3018</h3>
              <p>Total Attendees</p>
            </div>

            <div className="impact-summary-item">
              <h3>1188</h3>
              <p>Projects built in an 18-hour make-a-thon</p>
            </div>

            <div className="impact-summary-item">
              <h3>2039</h3>
              <p>First-time attendees</p>
            </div>

            <div className="impact-summary-item">
              <h3>54%</h3>
              <p>First-time tech builders</p>
            </div>

            <div className="impact-summary-item">
              <h3>72.5%</h3>
              <p>First-time hackathon participants</p>
            </div>

            <div className="impact-summary-item">
              <h3>89.6%</h3>
              <p>Actively sought mentorship</p>
            </div>

            <div className="impact-summary-item">
              <h3>97.7%</h3>
              <p>Learned from peers</p>
            </div>

            <div className="impact-summary-item">
              <h3>91.5%</h3>
              <p>Reported a confidence boost</p>
            </div>
          </div>
        </div>

        {/* Existing section */}
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
