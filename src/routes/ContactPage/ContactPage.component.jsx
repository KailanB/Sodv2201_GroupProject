import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './ContactPage.style.css';

const ContactPage = () => {
    return (
        <div className="admin-page">
            <h3>Contact Us</h3>
            <div className="contact-container">
                {/* Left Box */}
                <div className="contact-info">
                    <h4>Get in Touch</h4>
                    <p>Email: bvc@gmail.com</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Or Contact Us Via:</p>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                    </div>
                </div>

                {/* Right Box - Contact Form */}
                <form className="form-group" action="/submit" method="POST">
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name:</label>
                        <input type="text" id="fullName" className="standardInput" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" className="standardInput" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" className="standardInput" rows="4" required />
                    </div>
                    <button type="submit" className="submitButton">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
