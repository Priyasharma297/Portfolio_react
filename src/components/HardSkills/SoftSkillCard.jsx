// components/SoftSkillCard.jsx
import React from 'react';

const SoftSkillCard = ({ imageSrc, title }) => {
  return (
    <div className="vertical">
      <img className="imagetop" src={imageSrc} alt={title} />
      <div className="verticaltitle">{title}</div>
    </div>
  );
};

export default SoftSkillCard;
