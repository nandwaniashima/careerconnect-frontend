import React from 'react';
 // Adjust the path to your logo
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
    <div className='footer2'>
      {/* <div className="footer-title">
        <h1>Contact us<span>&#129133;</span></h1>
      </div> */}
      {/* <div className="footer-logo">
          <img src={logo} alt="Logo" />
      </div> */}
      <div className="footer-content">
        <div className="footer-section">
          <h3>CC</h3>
          <ul>
            <li>Our vision</li>
            <li>Our team</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>MEDIA</h3>
          <ul>
            <li>Blog</li>
            <li>Use cases</li>
            <li>Our events</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>FOLLOW US</h3>
          <ul>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">YouTube</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>DECRYPT</h3>
          <ul>
            <li>Public policies</li>
            <li>Innovation strategy</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>INQUIRIES</h3>
          <ul>
            <li>Feedback</li>
            <li>FAQ's</li>
            <li>Collaboration</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>UPDATES</h3>
          <ul>
            <li>Job alerts</li>
            <li>Newsletter</li>
            <li>Livechat</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>CONTACT</h3>
          <ul>
            <li>Phone Support: 1234567890</li>
            <li>Email: cc@gmail.com</li>
            <li>Address: xyz</li>
          </ul>
        </div>
      </div>
      {/* Additional Footer Bottom Section */}
      <div className="footer-bottom">
        <span>@CareerConnect2024</span>
        <div className="footer-bottom-links">
          <a href="#">Legal information</a>
          <a href="#">Cookies</a>
          <a href="#">Our Website</a>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;