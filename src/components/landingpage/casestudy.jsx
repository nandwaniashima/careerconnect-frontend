import React from 'react';


import apple from "../../assets/apple.png";
import nike from "../../assets/nike.jpg";
import lays from "../../assets/lays.png";

import './casestudy.css';

const CaseStudiesSection = () => {
    return (
        <section className="case-studies">
            <div className="case-studies-container">
                <div className="case-studies-header">
                    <div className="case-studies-text">
                        <h1>Our Network</h1>
                        <p className="subtitle">Explore how we've helped our partners achieve remarkable results and reach new heights.</p>
                    </div>
                    <button className="discover-button">DISCOVER OUR ACHIEVEMENTS</button>
                </div>
                <div className="case-studies-grid">
                    <div className="case-study">
                        <div className="case-study-header">COMPANY</div>
                        <img src={apple} alt="Affiliz Logo" />
                        <h3>APPLE</h3>
                        <p className="highlight">+1M€ bank leverage</p>
                        <p className='case-study1'>Affiliz is a SaaS platform for affiliate marketing, designed to simplify and...</p>
                        <button className="see-more-button">See More</button>
                    </div>
                    <div className="case-study">
                        <div className="case-study-header">COMPANY</div>
                        <img src={lays} alt="Walterre Logo" />
                        <h3>LAYS</h3>
                        <p className="highlight">I-Nov competition: +500k€ in funding from BpiFrance </p>
                        <p className='case-study1'>Walterre, specialized in energy efficiency, evaluates and optimizes buildings...</p>
                        <button className="see-more-button">See More</button>
                    </div>
                    <div className="case-study">
                        <div className="case-study-header">COMPANY</div>
                        <img className='nike-image' src={nike} alt="Lynx Logo" />
                        <h3>NIKE</h3>
                        <p className="highlight">Horizon Europe - €8M grant for the consortium</p>
                        <p className='case-study1'>Lynx pioneers autonomous mixed reality (AR+VR) with the Lynx-R1 headset...</p>
                        <button className="see-more-button">See More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudiesSection;