import React, { useState } from 'react';
import './Appp.css'; 
import house from '../../Asset/House.png'
import { Link } from 'react-router-dom'; 

const PerksSection = () => {
  // State to track which sections are expanded
  const [expanded, setExpanded] = useState({
    web3: false,
    rent: false,
    win: false
  });

  // Toggle the expanded section
  const toggleSection = (section) => {
    setExpanded({
      ...expanded,
      [section]: !expanded[section]
    });
  };

  return (
    <div className="perks-section">
      <h2>Some of our perks include...</h2>
      <p>Separated that they don't live in Bookmarksgrove and they live in marked.</p>
      
      <div className="content-container">
        {/* Left: Image */}
        <div className="image-container">
          <img src={house} alt="House" className="house-image" />
            {/* Sign-up Button */}
        <Link to="/signup">
            <button className='sign-up-btn'>Sign up</button>
          </Link>
        </div>
        
        {/* Right: Sidebar */}
        <div className="sidebar">
          <h3>Getting rid of the Agent...</h3>
          
          {/* Web3 Tokens */}
          <div className="item">
            <button className="toggle-btn" onClick={() => toggleSection('web3')}>
              Web3 tokens <span>{expanded.web3 ? '-' : '+'}</span>
            </button>
            {expanded.web3 && (
              <p>Separated that they don't live in Bookmarksgrove and they live in marked. Separated that they don't live in Bookmarksgrove and they live in marked. Separated that they don't live in Bookmarksgrove and they live in marked.</p>
            )}
          </div>
          
          {/* Rent with agents wahala */}
          <div className="item">
            <button className="toggle-btn" onClick={() => toggleSection('rent')}>
              Rent with agents wahala <span>{expanded.rent ? '-' : '+'}</span>
            </button>
            {expanded.rent && (
              <p>Separated that they don't live in Bookmarksgrove and they live in marked...</p>
            )}
          </div>
          
          {/* Win wild tokens */}
          <div className="item">
            <button className="toggle-btn" onClick={() => toggleSection('win')}>
              Win wild tokens <span>{expanded.win ? '-' : '+'}</span>
            </button>
            {expanded.win && (
              <p>Separated that they don't live in Bookmarksgrove and they live in marked...</p>
            )}
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default PerksSection;
