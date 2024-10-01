import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import './AddPayment.css';
import { useNavigate } from 'react-router-dom'


const AddPayment = () => {
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const navigate = useNavigate();

  const HandleApply = () => {
    navigate('/application'); // '/target-page'
  };

  const handleMakePayment = () => {
    navigate('/addpayment'); // '/target-page'
  };

  const HandleCard = () => {
    navigate('/payment'); // '/target-page'
  };

  const handleWeb = () => {
    navigate('/paymentmethod'); // '/target-page'
  };


  return (
    <>
    <div className="home-application-form">
      <h1>Apply for this home</h1>
      <p className="subtitle">
        Catalyst offers the competitive advantage of leveraging <br /> advanced AI technologies.
      </p>

      <div className="steps">
        <span onClick={HandleApply}>Application form</span>
        <span>Personality match</span>
        <span className="active" onClick={handleMakePayment}>Make payment</span>
      </div>

      <div className="add-section">
        <h2>Add card</h2>
        <div className="add-button" onClick={HandleCard} >
          <button>
            <PlusCircle size={20} />
            Add new card
          </button>
        </div>
      </div>

      <div className="add-section" onClick={handleWeb}>
        <h2>Add web3 wallet</h2>
        <div className="add-button">
          <button>
            <PlusCircle size={20} />
            Add new card
          </button>
        </div>
      </div>

      <div className="actions">
            <div className="term-privacy">
                <input type="checkbox"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                  />
                  <label htmlFor="terms">
                    I have read and agreed to the <a href="/">terms of service</a>
                  </label>
            </div>
          </div>
      <button className="apply-button" disabled={!agreedToTerms}>
        Apply now
      </button>
    </div>
    </>
  );
};

export default AddPayment;