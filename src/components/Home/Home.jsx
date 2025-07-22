import React, { useEffect } from 'react';
import Typed from 'typed.js'; // Import Typed.js
import profileImage from '/images/profile.jpg'; 
import resume from '/images/Resume original.pdf'; 
import './Home.css'

const Home = () => {
  useEffect(() => {
    const options = {
      strings: ['Student', 'Web Developer', 'Web Designer'],
      typeSpeed: 40,
    };
    
    const typed = new Typed('#element', options);

    
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="firstsection">
      <div className="leftsection">
        Hy! My name is <span className="purple">Priya Sharma</span>
        <div>I am a Passionate</div>
        <span id="element"></span>

        <div className="buttons">
          <button className="btn">
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'white' }}
          >
          View Resume
          </a>
          </button>

          <button className="btn">
            <a
              href="https://github.com/Priyasharma297"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              Visit Github
            </a>
          </button>
        </div>
      </div>

      <div className="rightsection">
        <img
          src={profileImage}
          alt="Developer"
          style={{ borderRadius: '100%' }}
        />
      </div>
    </section>
  );
};

export default Home;
