// components/Footer.jsx
import React from 'react';
import './Footer.css'
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left">
          <h3>Priya Sharma</h3>
          <p style={{ color: 'slategray' }}>Full Stack Developer</p>
          <p style={{ color: 'slategray' }}>PORTFOLIO</p>
        </div>
        <div className="footer-center">
          <ul className="social-links">
            <li><a href="https://github.com/Priyasharma297" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/priya-sharma-9840a7287/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
            <li><a href="https://www.instagram.com/priya__238/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </div>
        <div className="footer-right">
          <div className="footer-contact">
            <p>Email: <a href="mailto:priyasharma297g@gmail.com">priyasharma297g@gmail.com</a></p>
            <p>Phone: +91 1256789654</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Priya Sharma. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
