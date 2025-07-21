// components/SkillCard.jsx
import React from 'react';

const SkillCard = ({ imageSrc, title, description }) => {
  return (
    <div className="vertical">
      <img className="imagetop" src={imageSrc} alt={title} />
      <div className="verticaltitle">{title}</div>
      <div className="verticaldesc">{description}</div>
    </div>
  );
};

export default SkillCard;
