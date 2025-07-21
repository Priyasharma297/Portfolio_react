import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <header>
      <nav>
        <div className="left">Priya Sharma</div>
        <div className="hamburger" onClick={handleMenuToggle}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`right ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink></li>
            <li><ScrollLink to="education" smooth={true} duration={500}>Education</ScrollLink></li>
            <li><ScrollLink to="skills" smooth={true} duration={500}>Skills</ScrollLink></li>
            <li><ScrollLink to="certificates" smooth={true} duration={500}>Achievements</ScrollLink></li>
            <li><ScrollLink to="projects" smooth={true} duration={500}>Projects</ScrollLink></li>
            <li><ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
