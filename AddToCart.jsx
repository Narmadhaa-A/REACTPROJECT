// AddToCart.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './AddToCart.css';

function AddToCart() {
  const location = useLocation();
  const navigate = useNavigate();
  const { event } = location.state || {};

  const handleConfirmPurchase = () => {
    // Navigate to the Purchase page and pass the event details
    navigate('/purchase', { state: { event } });
  };

  return (
    <div className="add-to-cart-page">
      <h2>Successfully! Added to Cart</h2>
      {event ? (
        <div className="event-details">
          <img src={event.image} alt={event.name} className="event-image" />
          <h3>{event.name}</h3>
          <p>Price: {event.date}</p>
          <p>Discount: {event.location}</p>
          <button className="confirm-purchase" onClick={handleConfirmPurchase}>
            Confirm Purchase
          </button>
        </div>
      ) : (
        <p>No event details found.</p>
      )}
    </div>
  );
}

export default AddToCart;