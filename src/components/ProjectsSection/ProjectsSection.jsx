// components/ProjectsSection.jsx
import React, { useState } from 'react';
import ProjectItem from './ProjectItem';
import './ProjectSection.css';

const ProjectsSection = () => {
  const [openProject, setOpenProject] = useState(null);

  const projects = [
    {
      imageSrc: 'images/bucket.jpg',
      projectName: 'BucketList Tracker',
      description: `Enables users to create and share travel goals via personalized bucket lists with image uploads and stories. Features secure JWT-based authentication, AI-powered itinerary planning using Gemini, and optimized image delivery through Cloudinary. Fully deployed for a seamless global user experience.`,
      frontend: 'Frontend: HTML, CSS, JavaScript, Handlebars (HBS)',
      backend: 'Backend: Node.js, Express.js, MongoDB, JWT, Gemini API',
      githubLink: 'https://github.com/Priyasharma297/Bucket',
      liveLink: 'https://bucketlist-tracker-mongo.onrender.com',
    },
    {
      imageSrc: 'images/mechanicc.avif',
      projectName: 'AnyWhere Mechanic',
      description: `A fully responsive frontend website designed to help users connect with vehicle mechanics
 anytime, anywhere. It showcases services with a clean, modern layout and smooth navigation. Hosted through
 GitHub Pages for smooth deployment and easy access.`,
      frontend: 'Frontend: React.js, Tailwind CSS',
      githubLink: 'https://github.com/Priyasharma297/AnyWhere',
      liveLink: 'https://Priyasharma297.github.io/AnyWhere',
    },
    {
      imageSrc: 'images/ds.jpeg',
      projectName: 'Disaster Alert',
      description: `Disaster Management Web App
A group project developed by me and my teammate. It is an emergency support platform designed to help individuals locate the safest nearby areas during disasters and connect with essential resources or volunteers if stranded. The app aims to provide real-time assistance and improve response efficiency during critical situations. Currently under development.`,
      frontend: 'Frontend: React.js, Tailwind CSS, Map APIs, JavaScript',
      backend: 'Backend: Node.js, Express.js, MongoDB, JWT',
      githubLink: 'https://github.com/kshitijrat/DM',
    },
    {
  imageSrc: 'images/rabbit.jpg', 
  projectName: 'Rabbit (E-Commerce Website)',
  description: 'A full-stack e-commerce web application currently under development, featuring admin and user dashboards, Cloudinary for image storage, and PayPal integration for payments. Built for seamless product management and a smooth shopping experience.',
  frontend: 'Frontend: React.js, Tailwind CSS, JavaScript',
  backend: 'Backend: Node.js, Express.js, MongoDB, Cloudinary, JWT, PayPal API',
  githubLink: 'https://github.com/Priyasharma297/Rabbit_Ecommerce', 
},
    {
      imageSrc: 'images/weather.webp',
      projectName: 'Weather Website',
      description: 'A weather app providing real-time updates for different regions based on user searches, built with a clean and responsive interface.',
      frontend: 'Frontend: HTML, CSS, ReactJs',
      githubLink: 'https://github.com/Priyasharma297/Weather_App',
    },
    {
      imageSrc: 'images/icas.webp',
      projectName: 'Company Recruitment system',
      description: 'A web application that allows candidates to register and provides a simple, responsive, and user-friendly experience.',
      frontend: 'Frontend: HTML, CSS',
      githubLink: 'https://github.com/Priyasharma297/CompanyRecruitment_website',
    },
  ];

  const handleProjectClick = (index) => {
    setOpenProject(openProject === index ? null : index);
  };

  return (
    <section id="projects" className="fourthsection">
      <br /><br />
      <h1 style={{ color: 'rgb(161, 115, 204)' }}>Projects</h1>
      <span className="textgrey">Enhancing user experience with dynamic, visually appealing design.</span>
      <br /><br /><br />
      <div className="project-list">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-item ${openProject === index ? 'open' : ''}`}
            onClick={() => handleProjectClick(index)}
          >
            <ProjectItem {...project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
