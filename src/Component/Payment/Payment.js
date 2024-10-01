import React, { useState } from 'react';
import './Payment.css'; 
import { FiSettings } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom'


function Payment() {
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvc, setCardCvc] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');


  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleCardExpiryChange = (event) => {
    setCardExpiry(event.target.value);
  };

  const handleCardCvcChange = (event) => {
    setCardCvc(event.target.value);
  };

  const handleNameOnCard = (event) => {
    setNameOnCard(event.target.value);
  };




  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform validation and submission logic here
    console.log('Card Number:', cardNumber);
    console.log('Card Expiry:', cardExpiry);
    console.log('Card CVC:', cardCvc);
    console.log('Card Name', nameOnCard)
  };

  const navigate = useNavigate();

  const handleSuccesspay = () => {
    navigate('/success_booking'); // Replace '/target-page' with your desired path
  };


  return (
    <>
    <div className="payment-form">
        <div className='add-new-card'>
          <h3>Add New Card</h3>
          <p><FiSettings/></p>
        </div>
        <div className="divide"></div>

      <form onSubmit={handleSubmit}>
      <div className="card-details">
            <div className="city">
            <label htmlFor="card-number">Card Number</label> <br />
            <input
            type="text"
            id="card-number"
            name="card-number"
            value={cardNumber}
            onChange={handleCardNumberChange}
            required
            />
            </div>
            <div className='state'>
            <div className="city">
            <label htmlFor="card-cvc">CVV</label> <br />
            <input
            type="text"
            id="card-cvc"
            name="card-cvc"
            value={cardCvc}
            onChange={handleCardCvcChange}
            required
            />
            </div>
          </div>
      </div>
      <div className="card-details">
          <div className="city">
          <label htmlFor="card-cvc">Name on Card</label> <br />
            <input
            type="text"
            id="card name"
            name="card name"
            value={nameOnCard}
            onChange={handleNameOnCard}
            required
            />
          </div>
          <div className='state'>
            <label htmlFor="card-expiry">Expiry</label>  <br />
            <input
            type="text"
            id="card-expiry"
            name="card-expiry"
            value={cardExpiry}
            onChange={handleCardExpiryChange}
            required
            />
          </div>
      </div>
        
       <div className='card-btn'>
        <button type='submit' onClick={handleSuccesspay}>Add card</button>
        <button type="reset">Cancel</button>
       </div>

    
      </form>
    </div>
    </>
  );
}

export default Payment;