import React, { useState } from 'react';
import './SuccessPay.css';

const BookingSuccessful = ({ onClose, onGoBack }) => {
  return (
    <div className="booking-successful-overlay">
      <div className="booking-successful-modal">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Booking Successful</h2>
        <p>You have successfully rented this property</p>
        <button className="go-back-button" onClick={onGoBack}>Go back</button>
      </div>
    </div>
  );
};

function Booking() {
  const [showModal, setShowModal] = useState(true);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleGoBack = () => {
    console.log('Going back...');
    setShowModal(false);
  };

  return (
    <div className="App">
      {showModal && (
        <BookingSuccessful onClose={handleClose} onGoBack={handleGoBack} />
      )}
    </div>
  );
}

export default Booking;
