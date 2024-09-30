import React, { useState } from "react";
import './Signup.css';
import Property from  '../Property/Property.js';

const RentalFilter = () => {
  const [location, setLocation] = useState("");
  const [spaceType, setSpaceType] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [results, setResults] = useState([]);  // State to store rental results

  // Apply filter functionality
  const applyFilter = async () => {
    const filterData = {
      location,
      spaceType,
      price,
      duration,
    };

    try {
      const response = await fetch("http://localhost/api/filter_rentals.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filterData),
      });
      const data = await response.json();

      if (Array.isArray(data)) {
        setResults(data);  // Store rental results
      } else {
        setResults([data]);  // Handle single response or error message
      }
    } catch (error) {
      console.error("Error applying filters:", error);
    }
  };

  // Clear filter functionality
  const clearFilter = () => {
    setLocation("");
    setSpaceType("");
    setPrice("");
    setDuration("");
    setResults([]);  // Clear the results
  };

  return (
    <>
      <div className="signup_bg">
        <div className="filter-container">
          <h2>Available rentals in this location</h2>
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
            <button onClick={applyFilter} className="apply_btn">Apply Filter</button>
            <button onClick={clearFilter} className="clear_btn">Clear Filter</button>
          </div>

          {/* Display Results */}
          {results.length > 0 && (
            <div className="results-container">
              <h3>Rental Results:</h3>
              {results.map((rental, index) => (
                <div key={index} className="rental-item">
                  <p>Location: {rental.location}</p>
                  <p>Type: {rental.space_type}</p>
                  <p>Price: {rental.price}</p>
                  <p>Duration: {rental.duration}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Property/>
    </>
  );
};

export default RentalFilter;
