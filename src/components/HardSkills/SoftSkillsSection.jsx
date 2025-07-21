// components/SoftSkillsSection.jsx
import React from 'react';
import SoftSkillCard from './SoftSkillCard';

const SoftSkillsSection = ({ title, skills }) => {
  return (
    <section className="thirdsection">
      <h1 style={{ color: 'rgb(161, 115, 204)' }}>{title}</h1>
      <span className="textgrey">Personal attributes and interpersonal skills</span>
      <br />
      <br />
      <br />
      <div className="box">
        {skills.map((skill, index) => (
          <SoftSkillCard 
            key={index}
            imageSrc={skill.imageSrc} 
            title={skill.title} 
          />
        ))}
      </div>
    </section>
  );
};

export default SoftSkillsSection;
