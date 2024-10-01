import React, { useState } from 'react';
import './PaymentMethod.css'; 
import { useNavigate } from 'react-router-dom';
import visa from '../../Asset/Visa.png'
import metamask from '../../Asset/MetaMask.png'
const PaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState(''); // Track selected method

  // Function to handle selection
  const handleSelect = (method) => {
    setSelectedMethod(method);
  };

  const navigate = useNavigate();

  const handlePayment = () => {
    navigate('/payment'); // '/target-page' 
  };

  return (
    <>
    <div className="payment-container">
      <h2>Choose payment method</h2>
      
      {/* Card Payment Option */}
      <div className={`payment-option ${selectedMethod === 'card' ? 'selected' : ''}`} onClick={() => handleSelect('card')}>
        <div className="payment-card">
          <img src={visa} alt="Visa" className="icon" />
          <span>9028 **** ****</span>
        </div>
        <input type="checkbox" checked={selectedMethod === 'card'} readOnly />
      </div>
      
      {/* Web3 (MetaMask) Payment Option */}
      <div className={`payment-option ${selectedMethod === 'metamask' ? 'selected' : ''}`} onClick={() => handleSelect('metamask')}>
        <div className="payment-web3">
          <img src={metamask} alt="MetaMask" className="icon" />
          <span>MetaMask</span>
        </div>
        <input type="checkbox" checked={selectedMethod === 'metamask'} readOnly />
      </div>
      
      {/* Continue Button */}
      <button className="continue-button" onClick={handlePayment}>Continue</button>
    </div>
    </>
  );
};

export default PaymentMethod;
