// components/HardSkills.jsx
import React from 'react';
import SkillsSection from './SkillsSection';
import SoftSkillsSection from './SoftSkillsSection';
import javaImg from '/images/java.png';
import pythonImg from '/images/python.png';
import jsImg from '/images/js.png';
import nodeImg from '/images/node.png';
import htmlImg from '/images/html.png';
import cssImg from '/images/css.png';
import reactImg from '/images/react.png';
import sqlImg from '/images/sql.png';
import chatImg from '/images/chat.png';
import gitImg from '/images/git.png';
import vsImg from '/images/vs.png';
import softImg from '/images/soft.png'; 
import './HardSkills.css';

const HardSkills = () => {
  const languages = [
    { imageSrc: javaImg, title: 'Java', description: 'I have successfully completed both basic and advanced Java programming, gaining a strong understanding of core concepts.' },
    { imageSrc: pythonImg, title: 'Python', description: 'I have gained a foundational understanding of Python, covering essential topics such as data types, control structures, functions, and basic libraries.' },
    { imageSrc: jsImg, title: 'JavaScript', description: 'I have developed a solid intermediate-level proficiency in JavaScript, enabling me to create dynamic and interactive web applications.' },
    { imageSrc: nodeImg, title: 'Node.js', description: 'Proficient in Node.js, capable of building server-side applications, handling routing, middleware, and database interactions for efficient backend solutions.' },
  ];

  const frameworks = [
    { imageSrc: htmlImg, title: 'HTML', description: 'Excellent in HTML, with strong skills in creating well-structured, semantic, and accessible web pages.' },
    { imageSrc: cssImg, title: 'CSS', description: 'Advanced in CSS, with expertise in creating complex layouts, animations, and responsive designs using modern techniques and tools.' },
    { imageSrc: reactImg, title: 'React', description: 'Basic proficiency in React, with a foundation in building components, managing state, and understanding component lifecycle methods.' },
    { imageSrc: sqlImg, title: 'MySQL', description: 'Good with MySQL, skilled in designing databases, writing complex queries, and optimizing performance for efficient data management.' },
  ];

  const softwareAndTools = [
    { imageSrc: chatImg, title: 'ChatGPT', description: 'Good at using ChatGPT, skilled in generating detailed and contextually relevant responses, and leveraging its capabilities for various applications and tasks.' },
    { imageSrc: gitImg, title: 'GitHub', description: 'Basic proficiency in GitHub, with skills in managing repositories, using version control, and collaborating on projects.' },
    { imageSrc: vsImg, title: 'Visual Studio Code', description: 'Good at using VS Code, with proficiency in navigating the editor, utilizing extensions, and managing coding tasks effectively.' },
  ];

  const softSkills = [
    { imageSrc: softImg, title: 'Teamwork' },
    { imageSrc: softImg, title: 'Problem Solving' },
    { imageSrc: softImg, title: 'Creativity' },
    { imageSrc: softImg, title: 'Active Listening' },
  ];

  return (
    <div>
      <section id="skills" className="thirdsection">
        <br />
        <br />
        <br />
        <br />
        <h1 style={{ color: 'rgb(161, 115, 204)' }}>Hard Skills</h1>
        <span className="textgrey">What I have developed in me so far</span>
        <br />
        <br />
      </section>

      <SkillsSection title="Languages" skills={languages} />
      <SkillsSection title="Frameworks" skills={frameworks} />
      <SkillsSection title="Software and Tools" skills={softwareAndTools} />
      <SoftSkillsSection title="Soft Skills" skills={softSkills} />
    </div>
  );
};

export default HardSkills;
