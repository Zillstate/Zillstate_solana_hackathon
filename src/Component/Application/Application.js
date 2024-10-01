import React, { useState } from 'react';
import './Application.css';
import { useNavigate } from 'react-router-dom'


const Application = () => {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    email: '',
    originCity: '',
    state: '',
    married: '',
    kids: '',
    religion: '',
    occupation: '',
    comfortableRent: '',
    termsAgreed: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const navigate = useNavigate();

  const handleMakePayment = () => {
    navigate('/addpayment'); // '/target-page' 
    };
 
  const HandleApply = () => {
    navigate('/application'); // '/target-page'
  };
 


  return (
    <>
    <form className="application-form" onSubmit={handleSubmit}>
      <h1>Apply for this home</h1>
      <p>Catalyst offers the competitive advantage of leveraging  <br /> advanced AI technologies</p>

      <div className="form-tab">
        <p className="active-tab" onClick={HandleApply}>Application form</p>
        <p onClick={handleMakePayment}>Make payment</p>
        {/* <button type="button" className="active-tab">Application form</button>
        <button type="button">Make payment</button> */}
      </div>
      {/* phone number */}
      <div className="form-number">
        <label htmlFor="">Email</label> <br />
        <input 
          type="email" 
          name="email" 
          placeholder="johndoe@gmail.com" 
          value={formData.email} 
          onChange={handleChange} 
        />
      </div>
      {/* phone number */}
      <div className="form-number">
        <label htmlFor="">Phone Number</label> <br />
        <input 
          type="text" 
          name="phoneNumber" 
          placeholder="Phone Number" 
          value={formData.phoneNumber} 
          onChange={handleChange} 
        />
      </div>
      {/* state and origin city */}

      <div className="native">
            <div className="city">
              <label htmlFor="">Origin City</label> <br />
              <input 
                type="text" 
                name="originCity" 
                placeholder="Origin City" 
                value={formData.originCity} 
                onChange={handleChange} 
              />
            </div>
            <div className='state'>
            <label htmlFor="">State</label> <br />
                <input 
              type="text" 
              name="state" 
              placeholder="State" 
              value={formData.state} 
              onChange={handleChange} 
            />

            </div>

      </div>

      <div className="native">
            <div className="city">
              <label htmlFor="">Are you married?</label> <br />
                <input 
                  type="text" 
                  name="married" 
                  placeholder="Are you married" 
                  value={formData.married} 
                  onChange={handleChange} 
                />
            </div>
            <div className='state'>
            <label htmlFor="">Do you have kids?</label> <br />
            <input 
                type="text" 
                name="kids" 
                placeholder="Do you have kids" 
                value={formData.kids} 
                onChange={handleChange} 
              />

            </div>

      </div>

      <div className="form-number">
        <label htmlFor="">Do you Practice a religion, if yes which?</label> <br />
        <input 
          type="text" 
          name="religion" 
          placeholder="Do you practice a religion, if yes which" 
          value={formData.religion} 
          onChange={handleChange} 
        />
      </div>

      <div className="form-number">
        <label htmlFor="">What Occupation do you have?</label> <br />
        <input 
          type="text" 
          name="occupation" 
          placeholder="What occupation do you have" 
          value={formData.occupation} 
          onChange={handleChange} 
        />
      </div>

      <div className="form-number">
        <label htmlFor="">Are you comfortable paying the rent</label> <br />
        <input 
          type="text" 
          name="comfortableRent" 
          placeholder="Are you comfortable paying the rent" 
          value={formData.comfortableRent} 
          onChange={handleChange} 
        />
      </div>
      <div className="actions">
            <div className="term-privacy">
                <input type="checkbox"
                // checked={formData.termsAgreed} 
                onChange={handleChange} 
                 id="terms"
                  />
                  <label htmlFor="terms">
                    I have read and agreed to the <a href="/">terms of service</a>
                  </label>
            </div>
          </div>
      <button type="submit" className="apply-btn" onClick={HandleApply}>Apply now</button>
    </form>
    </>
  );
};

export default Application;
