import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Register.css';

function Register() {
  const navigate = useNavigate();
  const location = useLocation();
  const { event } = location.state || {}; // Get event details from navigation state

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you could send registration data to the server
    console.log('Registered for ${event.name}, formData');
    alert('Successfully registered for ${event.name}!');
    navigate('/events'); // Redirect to Upcoming Events page after registration
  };

  return (
    <div className="register-page">
      <h2>Register for {event ? event.name : "Event"}</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
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
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" className="register-submit">
          Submit Registration
        </button>
      </form>
    </div>
  );
}

export default Register;