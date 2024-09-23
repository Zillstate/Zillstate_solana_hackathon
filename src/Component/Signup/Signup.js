import React, { useState } from "react";
// import Navbar  from "../Navbar/Navbar";
import './Signup.css'
// import { FaSearch } from 'react-icons/fa';
// import Zill_Sign from "../Zillstate_Form/Zill_Sign";

const RentalFilter = () => {
  // State for the filters
  const [location, setLocation] = useState("");
  const [spaceType, setSpaceType] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");

  // Apply filter functionality
  const applyFilter = () => {
    // Add functionality for applying the filter
    console.log("Filters applied:", {
      location,
      spaceType,
      price,
      duration,
    });
  };

  // Clear filter functionality
  const clearFilter = () => {
    // Reset all the filters
    setLocation("");
    setSpaceType("");
    setPrice("");
    setDuration("");
  };

  return (
    <>
    <div className="signup_bg">
    {/* <Navbar/> */}
        <div className="filter-container">
          <h2>Available rentals in <br />this location</h2>
          <div className="filters">
            <div className="filter-item">
              <label>Location</label>
              <input
                type="text"
                value={location}
                placeholder="Select a location you would like to stay"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="filter-item">
              <label>Type of Space</label>
              <select
                value={spaceType}
                onChange={(e) => setSpaceType(e.target.value)}
              >
                <option value="">Select space type</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
              </select>
            </div>
            <div className="filter-item">
              <label>Price</label>
              <select value={price} onChange={(e) => setPrice(e.target.value)}>
                <option value="">Select price</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <div className="filter-item">
              <label>Duration</label>
              <select value={duration} onChange={(e) => setDuration(e.target.value)}>
                <option value="">Select duration</option>
                <option value="short">Short-term</option>
                <option value="long">Long-term</option>
              </select>
            </div>
          </div>
          <div className="buttons">
            <button onClick={applyFilter}
            className="apply_btn" >Apply Filter</button>
            <button onClick={clearFilter}
            className="clear_btn">
              Clear Filter
            </button>
          </div>
        </div>
    </div>
    {/* <Zill_Sign/> */}
    </>
  );
};

export default RentalFilter;
