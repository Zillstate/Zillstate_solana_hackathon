import React, { useState } from 'react';
import './Landlord.css';
import { useNavigate } from 'react-router-dom';

const Landlord = () => {

  const navigate = useNavigate();
  const HandleApply = () => {
    navigate('/application'); // '/target-page'
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    apartment: '',
    image1: null,
    image2: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image1' || name === 'image2') {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="landlord">
      <h2>Sign Up as a Landlord</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        <label>Phone Number</label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Enter your phone number"
        />

        <label>List an Apartment</label>
        <input
          type="text"
          name="apartment"
          value={formData.apartment}
          onChange={handleChange}
          placeholder="Enter apartment details"
        />

        <div className="image-section">
          <input type="file" name="image1" onChange={handleChange} />
          <input type="file" name="image2" onChange={handleChange} />
        </div>

        <button className="mint-nft-btn">Mint as NFT</button>
        <button type="submit" className="submit-btn" onClick={HandleApply}>Sign Up</button>
      </form>
    </div>
  );
};

export default Landlord;