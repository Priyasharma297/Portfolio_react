// components/SkillsSection.jsx
import React from 'react';
import SkillCard from './SkillCard';

const SkillsSection = ({ title, skills }) => {
  return (
    <section className="thirdsection">
      <div className="box">
        <center>
          <h2 style={{ color: 'rgb(188, 201, 211)' }}>{title}</h2>
        </center>
        {skills.map((skill, index) => (
          <SkillCard 
            key={index}
            imageSrc={skill.imageSrc} 
            title={skill.title} 
            description={skill.description} 
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
