import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Zilstate Branding Section */}
        <div className="footer-section">
          <h2>Zilstate</h2>
          <p>Zilstate Copyright 2024.</p>
          <p>All Rights Reserved.</p>
          <p>Developed By Zilstate</p>
        </div>

        {/* Links Section */}
        <div className="footer-section">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <ul>
            <li><a href="/research">Research</a></li>
            <li><a href="/project">Project</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li><FaPhone /> 9071-000-XXXX</li>
            <li><FaEnvelope /> Zilstate@gmail.com</li>
            <li><FaMapMarkerAlt /> Kingsroad Plaza, 34 clementt, Zone 2, Lagos, Nigeria</li>
          </ul>
        </div>
      </div>
      <div className='developer'>
          Developed by Zillstate
      </div>
    </footer>
  );
};

export default Footer;

