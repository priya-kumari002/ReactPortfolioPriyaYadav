import React from 'react';
import './Project.css';

const Project = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A fully responsive portfolio built with React and CSS.",
      link: "https://github.com/priya-kumari002/newresponportfolio"
    },
    {
      title: "Weather App",
      description: "Live weather updates using OpenWeatherMap API.",
      link: "https://github.com/priya-kumari002/weatherfor"
    },
    {
      title: "Review-Rating Nodejs Sql",
      description: "Manage daily tasks with add, store etc",
      link: "https://github.com/priya-kumari002/Teastallandreview"
    },
    {
        title: "Jio-Mart-Cart",
        description: "Manage daily tasks with add, store etc",
        link: "https://github.com/priya-kumari002/JIOMARTCARTT"
      },
      {
        title: "Student-Registration Form",
        description: "Manage daily tasks with add,delete,update,store etc",
        link: "https://github.com/priya-kumari002/Student-Registration-Form"
      }
      
      
  ];

  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
