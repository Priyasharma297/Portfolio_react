import React from 'react';
import eduImage from '/images/edu.png'; 
import './Education.css'
const Education = () => {
  return (
    <section id="education" className="secondsection">
      <br />
      <br />
      <br />
      <h1 style={{ color: 'rgb(161, 115, 204)' }}>EDUCATION</h1>

      {/* Masters */}
      <div className="education-item">
        <img src={eduImage} alt="Masters" className="education-image" />
        <div className="education-details">
          <div className="education-title">Masters</div>
          <div className="education-desc">
            I am pursuing my Masters in Computer Application from{' '}
            <span style={{ color: 'rgb(168, 185, 199)' }}>
              Maulana Azad National Institute Of Technology, Bhopal (M.P)
            </span>
            .<br />
            <br />
            <strong style={{ color: 'rgb(196, 196, 162)' }}>CGPA: 9.07</strong>
          </div>
        </div>
      </div>

      {/* Bachelors */}
      <div className="education-item">
        <img src={eduImage} alt="Bachelors" className="education-image" />
        <div className="education-details">
          <div className="education-title">Bachelors</div>
          <div className="education-desc">
            I have done my Bachelors in Computer Application from{' '}
            <span style={{ color: 'rgb(168, 185, 199)' }}>
              Devi Ahilya Vishwavidyalaya (School of Computer Technology and IT), Indore (M.P)
            </span>
            .<br />
            <br />
            <strong style={{ color: 'rgb(196, 196, 162)' }}>CGPA: 7.8</strong>
          </div>
        </div>
      </div>

      {/* Higher Secondary Education */}
      <div className="education-item">
        <img
          src={eduImage}
          alt="Higher Secondary Education"
          className="education-image"
        />
        <div className="education-details">
          <div className="education-title">Higher Secondary Education</div>
          <div className="education-desc">
            I have done my higher secondary education in P.C.M (Physics, Chemistry, Maths)
            with an optional subject Music, from{' '}
            <span style={{ color: 'rgb(168, 185, 199)' }}>
              Himalaya International School, Ratlam (M.P)
            </span>
            .<br />
            <br />
            <strong style={{ color: 'rgb(196, 196, 162)' }}>Percentage: 77.4%</strong>
          </div>
        </div>
      </div>

      {/* Secondary Education */}
      <div className="education-item">
        <img
          src={eduImage}
          alt="Secondary Education"
          className="education-image"
        />
        <div className="education-details">
          <div className="education-title">Secondary Education</div>
          <div className="education-desc">
            I have done my secondary education from{' '}
            <span style={{ color: 'rgb(168, 185, 199)' }}>
              Himalaya International School, Ratlam (M.P)
            </span>
            .<br />
            <br />
            <strong style={{ color: 'rgb(196, 196, 162)' }}>Percentage: 86.2%</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
