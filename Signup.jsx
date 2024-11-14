import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Fetch existing users
      const response = await axios.get('http://localhost:3003/users');
      const existingUser = response.data.find((user) => user.email === formData.email);

      if (existingUser) {
        setMessage('User already exists. Please use a different email.');
      } else {
        // Post new user data to the API
        await axios.post('http://localhost:3003/users', formData);
        localStorage.setItem('user', JSON.stringify(formData)); // Optionally store user data
        setMessage('Signup successful! You can now log in.');
        navigate('/events'); // Redirect to login page after successful signup
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setMessage('An error occurred during signup. Please try again.'); // Set error message
    }
  };

  return (
    <div className="signup-page">
      <h2>Create a New Account</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
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
        <button type="submit" className="signup-submit">Sign Up</button>
      </form>
      {message && <p className="message">{message}</p>} {/* Display feedback message */}
      <p className="login-link">
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
}

export default SignUp;
