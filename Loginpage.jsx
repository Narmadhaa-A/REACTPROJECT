import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Loginpage.css';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Fetch users from the API
      const response = await axios.get('http://localhost:3003/users');
      const users = response.data;

      // Check if the user exists
      const user = users.find(
        (user) => user.email === formData.email && user.password === formData.password
      );

      if (user) {
        console.log('Login Successful:', user);
        // Optionally, you can store user data in local storage or context
        localStorage.setItem('loggedInUser', JSON.stringify(user)); // Save user data in local storage

        // Redirect to a specific page on successful login
        navigate('/events'); // Change this to the desired route
      } else {
        setErrorMessage('Invalid email or password.'); // Set error message
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      setErrorMessage('Failed to fetch user data.'); // Set error message
    }
  };

  return (
    <div className="login-page">
      <h2>Welcome Back! To WinZone</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <button type="submit" className="login-submit">
          Login
        </button>
      </form>

      <p className="signup-link">
        Don’t have an account? <Link to="/signup">Sign up here</Link>
      </p>
    </div>
  );
}

export default Login;
