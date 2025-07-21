import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./SkillSlider.css";

const skillData = {
    "Hard Skills": [
        { name: "HTML", img: "/images/html.png" },
        { name: "CSS", img: "/images/css.png" },
        { name: "ReactJs", img: "/images/react.png" },
        { name: "NodeJs", img: "/images/node.png" },
        { name: "ExpressJs", img: "/images/express-js.png" },
        { name: "MySQL", img: "/images/sql.png" },
        { name: "MongoDB", img: "/images/images.png" },
      ],
  Languages: [
    { name: "Java", img: "/images/java.png" },
    { name: "Python", img: "/images/python.png" },
    { name: "JavaScript", img: "/images/js.png" },
  ],
  "Software & Tools": [
    { name: "Git", img: "/images/git.png" },
    { name: "Visual Studio", img: "/images/vs.png" },
    { name: "ChatGPT", img: "/images/chat.png" },
  ],
  "Soft Skills": [
    { name: "Communication", img: "/images/com.jpg" },
    { name: "Problem-Solving", img: "/images/pro.jpg" },
    { name: "Creativity", img: "/images/creati.jpeg" },
  ],
};

const categories = Object.keys(skillData);

const SkillSlider = () => {
  const [index, setIndex] = useState(0);
  const currentCategory = categories[index];

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === categories.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="skills" >
    <div className="skill-container">
      <h1 className="skill-title">My Skills</h1>
      <br/><br/><br/>
      <h2 className="skill-subtitle">{currentCategory}</h2>
      <br/>
      <div className="slider-wrapper">
  <button onClick={handlePrev} className="arrow-btn">
    <FaArrowLeft />
  </button>
  <div className="slider">
    <div className="skill-grid">
      {skillData[currentCategory].map((skill, i) => (
        <div key={i} className="skill-card-wrapper">
          <div className="skill-card" title={skill.name}>
            <img src={skill.img} alt={skill.name} width={50} height={50} />
          </div>
          <p className="skill-label">{skill.name}</p>
        </div>
      ))}
    </div>
  </div>
  <button onClick={handleNext} className="arrow-btn">
    <FaArrowRight />
  </button>
</div>

    </div>
    </section>
  );
};

export default SkillSlider;