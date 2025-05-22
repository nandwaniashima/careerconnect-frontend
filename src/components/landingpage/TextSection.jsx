import React from 'react';
import './TextSection.css'; 

const Textsection = () => {
  return (
    <div className="hello-container">
      <div className="header">
        <h1 className="main-text">
          Discover how our platform has <br />
          empowered users to achieve<br />
          <span className="highlight-text">
          career success and land <br />
          great roles. 
          </span>
        </h1>
        <p className="subtext">
          Begin your journey with us and see how effortlessly<br />
          you can transform your career dreams into reality,<br />
          <span className="highlight-subtext">
          helping you navigate your career journey with ease and reach the milestones you’ve always envisioned.
          </span>
        </p>
       
      </div>
      <span class="material-symbols-outlined star">asterisk</span>
      
      {/* <div className="icon"></div> */}
    </div>
  );
};

export default Textsection;