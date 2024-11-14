// Purchase.jsx
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Purchase.css';

function Purchase() {
  const location = useLocation();
  const navigate = useNavigate();
  const { event } = location.state || {};
  
  const [address, setAddress] = useState({
    name: '',
    street: '',
    city: '',
    state: '',
    zipCode: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/purchase-confirmation', { state: { event, address } });
  };

  return (
    <div className="purchase-page">
      <h2>Confirm Your Purchase</h2>
      {event ? (
        <div className="event-details">
          <img src={event.image} alt={event.name} className="event-image" />
          <h3>{event.name}</h3>
          <p>Price: {event.date}</p>
          <p>Discount: {event.location}</p>
          
          <form onSubmit={handleSubmit}>
            <h3>Delivery Address</h3>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={address.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="street"
              placeholder="Street Address"
              value={address.street}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={address.city}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={address.state}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="zipCode"
              placeholder="Zip Code"
              value={address.zipCode}
              onChange={handleChange}
              required
            />
            <button type="submit" className="confirm-purchase">Confirm Purchase</button>
          </form>
        </div>
      ) : (
        <p>No event details found.</p>
      )}
    </div>
  );
}

export default Purchase;