

// const About = () => {
//   return (
//     <section className="about" id="about">
//       <h2>About Me</h2>
//       <p>I’m a passionate React developer learning full-stack development.</p>
//     </section>
//   );
// };

// export default About;
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          Hello! I’m <strong>Priya Kumari</strong>, a passionate Full Stack Developer with a focus on building responsive and interactive web applications using <strong>React.js,Node.JS,MongoDb,Express.Js,Html,Css,JavaScript,Mysql,C/CPP</strong>
        </p>
        <p className="about-text">
          I enjoy turning complex problems into simple, beautiful, and intuitive designs. I'm currently Working as a Associate Software Engineer at Nesting probe pvt.ltd,full-stack development and sharpening my skills with hands-on projects.
        </p>
      </div>
    </section>
  );
};

export default About;
