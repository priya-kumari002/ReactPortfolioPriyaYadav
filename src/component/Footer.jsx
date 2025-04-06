
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <nav className='navfooter'>
         

          <a href="https://github.com/priya-kumari002" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>

          <a href="https://www.linkedin.com/in/priya-kumari-46017a24b/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>

          <a href="mailto:priyakum2120@gmail.com">
            <FaEnvelope /> Email
          </a>


          <a href="tel:+919931484733">
            <FaPhoneAlt /> +91 99314 84733
          </a>
        </nav>
      </div>

      <div className="footer-bottom">
        <p>© All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
