import React from 'react';
import imageb from '../assets/imageb.webp';
import '../styles//Testimonials.css';

function Testimonials() {
  return (
    <div className="testimonials-container">
      <div className="testimonials-content">
        <div className="testimonials-left">
          <h1 className="testimonials-title">Testimonials</h1>
          <br />
          <div className="testimonials-quote">
            <p>
              "All I knew was a little of Python and an ambition to learn something
              new by the end of the hackathon. I was amazed at what I did. Looking
              forward to building more and attending more hackathons."
            </p>
            <h4>Ancy <br />Biomedical Student, LBS</h4>
          </div>

          <div className="testimonials-quote" style={{ marginTop: '60px' }}>
            <p>
              "I learnt a new tech over a night, that's something I never thought
              I could do, even in my wildest dreams."
            </p>
            <h4>Khadeeja<br />LBS Institute Of Technology for Women</h4>
          </div>
        </div>

        <div className="testimonials-right">
          <img
            src={imageb}
            alt=""
            className="testimonials-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
