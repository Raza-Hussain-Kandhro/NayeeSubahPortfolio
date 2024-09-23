import React, { useState } from 'react';
import './contact.css';
import { FaEnvelope, FaWhatsapp, FaFacebookMessenger, FaArrowRight } from 'react-icons/fa';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [project, setProject] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement the form submission logic here
    alert('Message sent!');
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p className="sub-heading">Get in touch</p>
      <div className="contact-content">
        <div className="contact-left">
          <h2>Talk to Me</h2>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <div className="contact-details">
              <a href="mailto:razahussainkandhro260@gmail.com">razahussainkandhro260@gmail.com</a>
              <p>Write me <FaArrowRight className="arrow-icon" /></p>
            </div>
          </div>
          <div className="contact-item">
            <FaWhatsapp className="contact-icon" />
            <div className="contact-details">
              <a href="https://wa.me/+923223633568" target="_blank" rel="noopener noreferrer">+92 322 3633568</a>
              <p>Write me <FaArrowRight className="arrow-icon" /></p>
            </div>
          </div>
          <div className="contact-item">
            <FaFacebookMessenger className="contact-icon" />
            <div className="contact-details">
              <a href="https://m.me/razahussainkandhro1" target="_blank" rel="noopener noreferrer">Raza Hussain Kandhro</a>
              <p>Write me <FaArrowRight className="arrow-icon" /></p>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <h2>Write Me Your Project</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              placeholder="Project details..."
              value={project}
              onChange={(e) => setProject(e.target.value)}
              required
            ></textarea>
            <button type="submit">
              Send <FaArrowRight className="arrow-icon" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;