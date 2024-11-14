// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SignUp from './Signup';
import UpcomingEvents from './Upcomingevents';
import Login from './Loginpage';
import Register from './Register';
import AddToCart from './AddToCart';
import Purchase from './Purchase';
import PurchaseConfirmation from './PurchaseConfirmation';
import HomePage from './Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/events" element={<UpcomingEvents />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<AddToCart />} /> {/* Ensure path matches '/cart' */}
        <Route path="/purchase" element={<Purchase />} />        
        <Route path="/purchaseconfirmation" element={<PurchaseConfirmation />} />        

      </Routes>
    </Router>
  );
}

export default App;