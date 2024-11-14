// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function HomePage() {
  return (
    <div className="homepage">
      <header className="header">
        <h1><b>WinZone</b></h1>
        <p>Welcome to the ultimate platform for Sports Shopping !</p>
      </header>

      <div className="action-buttons">
        <Link to="/signup" className="button signup-button">
          Sign Up
        </Link>
        <Link to="/login" className="button login-button">
          Login
        </Link>
      </div>
    </div>
  );
}

export default HomePage;