import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React.js',
    'Git & GitHub', 'Figma', 'Bootstrap', 'Responsive Design',
    'REST API', 'Node.js','Express.Js', 'MongoDB','c programing','CPP','Python Beginner','Cnava design','Java Beginner','Restful APIs'
  ];

  return (
    <section className="skills" id="skills">
      <h2 className="skills-title">My Skills</h2>
      <p className="skills-subtitle">Technologies I've worked with:</p>

      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div className="skill-card" key={i}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
