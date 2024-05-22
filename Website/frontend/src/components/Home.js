import React from 'react';
import { Link } from 'react-router-dom';
import './css/Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="welcome-header">What We Offer:</h1>
      <div className="offer-container">
        <div className="offer-item">
          <span role="img" aria-label="Stock Price Prediction">📈</span>
          <p>Stock Price Prediction</p>
        </div>
        <div className="offer-item">
          <span role="img" aria-label="Financial Sentiment Analysis">💵</span>
          <p>Financial Sentiment Analysis</p>
        </div>
        <div className="offer-item">
          <span role="img" aria-label="Custom Dataset Creation">🌐</span>
          <p>Custom Dataset Creation</p>
        </div>
        <div className="offer-item">
          <span role="img" aria-label="Model Training and Deployment">💻</span>
          <p>Model Training and Deployment</p>
        </div>
        <div className="offer-item">
          <span role="img" aria-label="Consulting and Training">💼</span>
          <p>Consulting and Training</p>
        </div>
      </div>
      <p className="instruction-text">To use our system, please login or register.</p>
      <div className="button-container">
        <Link to="/login" className="link-button">
          <button className="login-button">Login</button>
        </Link>
        <Link to="/register" className="link-button">
          <button className="register-button">Register</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
