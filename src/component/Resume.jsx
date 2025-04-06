import React from 'react';
import './Resume.css';
import { FaDownload } from 'react-icons/fa';

const Resume = () => {
  const skills = [
    'C/C++', 'HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js',
    'MongoDB', 'SQL', 'Tailwind CSS', 'Linux', 'Bootstrap', 'Vercel', 'DSA','Express.Js,MaterialUI,Python beginner','Java beginner','Git','Github'
  ];

  const courses = ['Mern Stack Internshala', 'DSA Internshala', 'DSA+Mern Stack Apna College'];

  return (
    <section className="resume" id="resume">
      <div className="resume-container">
        {/* Heading */}
        <h2 className="section-heading">📄 PRIYA KUMARI</h2>
        <h2 className="section-heading">Currently Working as a Associate Software Engineer</h2> 

        <p className="contact-info">
          (+91) 9901438763 | priyakun2811@gmail.com<br />
          <a href="https://www.linkedin.com/in/priya-kumari-46017a24b/" target="_blank" rel="noreferrer">LinkedIn</a> | 
          <a href="https://github.com/priya-kumari002" target="_blank" rel="noreferrer"> GitHub</a>
        </p>

        {/* Download Button */}
        <div className="download-button">
          <a href="/cvvvvvvPriya.pdf" download="/cvvvvvvPriya.pdf">
            <FaDownload style={{ marginRight: '8px' }} />
            Download CV
          </a>
        </div>

        {/* Education */}
        <div className="resume-block">
          <h3 className="resume-title">🎓 Education</h3>
          <div className="resume-item">
            <p><strong>Maharana Pratap Engineering College</strong> (2021 - Present)<br />
              B.Tech - CSE | CGPA: 7.85 / 10</p>
            <p><strong>RJS College (12th Board)</strong> | Percentage: 71.8%</p>
            <p><strong>Sarvodaya High School</strong> | 10th Board | Percentage: 74.8%</p>
          </div>
        </div>

        {/* Technical Strengths */}
        <div className="resume-block">
          <h3 className="resume-title">🧠 Technical Strengths</h3>
          <div className="resume-skills">
            {skills.map((skill, i) => (
              <span className="skill-tag" key={i}>{skill}</span>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="resume-block">
          <h3 className="resume-title">💼 Experience</h3>
          <div className="resume-item">
          <p><strong>Currently Working as a Associate Software Engineer</strong><br />Working on: React.js,Nodejs,MongoDB,Sql,ExpressJs</p>
            
          
            <p><strong>Internshala (Training)</strong> - Internshala<br />
              Full Stack Developer Intern</p>
            <p><strong>Live Projects:</strong></p><br />
            <p><strong>Jio-Mart-Cart</strong><br />Tech: HTML, CSS, JS</p>
            <p><strong>Weather Forecast App</strong><br />Tech: HTML, CSS, JS</p>
            <p><strong>Portfolio</strong><br />Tech: React.js</p>
            <p><strong>Review/Rating</strong><br />Tech: React.js</p>
            
          </div>
        </div>

        {/* Relevant Courses */}
        <div className="resume-block">
          <h3 className="resume-title">📘 Relevant Courses</h3>
          <ul className="cert-list">
            {courses.map((course, i) => (
              <li key={i}>{course}</li>
            ))}
          </ul>
        </div>

        {/* Certifications */}
        <div className="resume-block">
          <h3 className="resume-title">📜 Licenses & Certifications</h3>
          <ul className="cert-list">
            <li>Internshala - HTML, CSS, JS, React, Node.js, Express, MongoDB (2024)</li>
          </ul>
        </div>

        {/* Extra-Curricular */}
        <div className="resume-block">
          <h3 className="resume-title">🏅 Extra-Curricular</h3>
          <ul className="cert-list">
            <li>Learner in Academic Projects</li>
            <li>Good communication and soft skills</li>
            <li>Participated in college-level coding events</li>
            <li>Runner-up in Gully Cricket (Coding style 😄)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;
