import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaUser, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nlcitjr', 'template_gfs24zw', form.current, 'V9cHOombPdUisAENv')
      .then((result) => {
        setMessage('✅ Message sent successfully!');
        form.current.reset();
      }, (error) => {
        setMessage('something went wrong');
      });
  };


  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">📬 Get in Touch</h2>
      <p className="contact-subtext">
        I'd love to hear from you! Whether you have a question, project idea, or just want to say hello.
      </p>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <FaUser className="icon" />
          <input type="text" name="user_name" placeholder="Your Name" required />
        </div>

        <div className="form-group">
          <FaEnvelope className="icon" />
          <input type="email" name="user_email" placeholder="Your Email" required />
        </div>

        <div className="form-group">
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        </div>

        <button type="submit" className="submit-btn">
          <FaPaperPlane /> Send Message
        </button>

        {message && <p className="contact-feedback">{message}</p>}
      </form>
    </section>
  );
};

export default Contact;


