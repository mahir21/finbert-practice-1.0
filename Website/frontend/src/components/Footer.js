import React, { useEffect, useState } from 'react';
import './css/Footer.css'; // Import your custom footer styles

function Footer() {
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.innerHeight >= document.body.offsetHeight);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className={`footer ${isFixed ? 'fixed-footer' : ''}`}>
      <div className="footer-container">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>
            We're a group of five individuals driven by a shared goal: to enhance <b>Stock market prediction</b>s using Finbert with LSTM & GRU.
          </p>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/services">Services</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <ul className="social-icons">
            <li><a href="/" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="/" aria-label="Twitter"><i className="fab fa-twitter"></i></a></li>
            <li><a href="/" aria-label="Instagram"><i className="fab fa-instagram"></i></a></li>
            <li><a href="/" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: (+880)16-4567-7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Stock Prediction. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
