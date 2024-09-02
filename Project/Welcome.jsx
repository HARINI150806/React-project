import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';

const Welcome = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/');
  };

  return (
    <div className="welcome-container">
      <div className="welcome-message">
        <h1>Welcome, Manage your transactions</h1>
        <button className="home-button" onClick={goToHomePage}>
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Welcome;
