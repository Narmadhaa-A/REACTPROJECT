import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PurchaseConfirmation.css';

function PurchaseConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { event, address } = location.state || {};

  const handleNavigateToCart = () => {
    navigate('/cart3'); // Adjust the route path to match your "Add to Cart" page
  };

  return (
    <div className="purchase-confirmation-page">
      <h2>Purchase Confirmation</h2>
      {event ? (
        <div className="confirmation-details">
          <h3>Event Details</h3>
          <img src={event.image} alt={event.name} className="event-image" />
          <h4>{event.name}</h4>
          <p>Date: {event.date}</p>
          <p>Location: {event.location}</p>

          <h3>Delivery Address</h3>
          {address ? (
            <div className="address-details">
              <p>Name: {address.name}</p>
              <p>Street: {address.street}</p>
              <p>City: {address.city}</p>
              <p>State: {address.state}</p>
              <p>Zip Code: {address.zipCode}</p>
            </div>
          ) : (
            <p>No address provided.</p>
          )}

          <button className="confirm-button">Confirm Purchase</button>
          <button className="navigate-to-cart-button" onClick={handleNavigateToCart}>
            Go to Add to Cart
          </button>
        </div>
      ) : (
        <p>No event details found.</p>
      )}
    </div>
  );
}

export default PurchaseConfirmation;
