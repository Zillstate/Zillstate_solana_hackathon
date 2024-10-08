// import React, { useState } from 'react';
import React from 'react';
import './Appp.css'; 
import house from '../../Asset/House.png'
import { Link } from 'react-router-dom'; 
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const PerksSection = () => {
  // State to track which sections are expanded
  // const [expanded, setExpanded] = useState({
  //   web3: false,
  //   rent: false,
  //   win: false
  // });

  // Toggle the expanded section
  // const toggleSection = (section) => {
  //   setExpanded({
  //     ...expanded,
  //     [section]: !expanded[section]
  //   });
  // };

  return (
    <div className="perks-section">
      <h2>Some of our perks include...</h2>
      <p>Separated that they don't live in Bookmarksgrove and they live in marked.</p>
      
      <div className="content-container">
        {/* Left: Image */}
        <div className="image-container">
          <img src={house} alt="House" className="house-image" />
            {/* Sign-up Button */}
        <Link to="/zill_sign">
            <button className='sign-up-btn'>Sign up</button>
          </Link>
        </div>
        
        {/* Right: Sidebar */}
        <div className="sidebar">
          <h3>Why choose us  still...</h3>

  {/* first comment */}
          {/* Web3 Tokens */}
          {/* <div className="item">
            <button className="toggle-btn first_btn" onClick={() => toggleSection('web3')}>
              Lighting fast results <span>{expanded.web3 ? '-' : '+'}</span>
            </button>
            {expanded.web3 && (
              <p>Explore the home, connect with landlords, and experience the future of renting. No middleman, no hassle. With Zillstate, your next home is just a clicks away</p>
            )}
          </div> */}

  {/* second comment */}
          {/* <div className="item">
            <button className="toggle-btn first_btn">
              Lighting fast results <span>{expanded.web3 ? '-' : '+'}</span>
            </button>
          </div> */}

          <div className="item">
            <button className="toggle-btn first_btn">
              Lighting fast results <span><AiOutlinePlus/></span>
            </button>
          </div>
          
          {/* Rent with agents wahala real wothout revamp */}
          {/* <div className="item second">
            <button className="toggle-btn second_btn" onClick={() => toggleSection('rent')}>
              Bypass the middleman <span>{expanded.rent ? '-' : '+'}</span>
            </button>
            {expanded.rent && (
              <p>Explore the home, connect with landlords, and experience the future of renting. No middleman, no hassle. With Zillstate, your next home is just a clicks away</p>
            )}
          </div> */}
          
          
{/* real without revamp */}

          {/* <div className="item second">
            <button className="toggle-btn second_btn" onClick={() => toggleSection('rent')}>
              Bypass the middleman <span>{expanded.rent ? '-' : '+'}</span>
            </button>
            {expanded.rent && (
              <p>Explore the home, connect with landlords, and experience the future of renting. No middleman, no hassle. With Zillstate, your next home is just a clicks away</p>
            )}
          </div> */}

{/* correcttion made */}
          <div className="item second">
            <button className="toggle-btn second_btn">
              Bypass the middleman <span><AiOutlineMinus/></span>
            </button>
              <p>Explore the home, connect with landlords, and experience the future of renting. No middleman, no hassle. With Zillstate, your next home is just a clicks away</p>
          </div>
          
          {/* Win wild tokens */}
          {/* <div className="item">
            <button className="toggle-btn last_btn">
              Pay with your sol token<span>{expanded.win ? '-' : '+'}</span>
            </button>
          </div> */}

          <div className="item">
            <button className="toggle-btn last_btn">
              Pay with your sol token<span><AiOutlinePlus/></span>
            </button>
          </div>


 {/*real one wothout revamp  */}
          {/* <div className="item">
            <button className="toggle-btn last_btn" onClick={() => toggleSection('win')}>
              Pay with your sol token<span>{expanded.win ? '-' : '+'}</span>
            </button>
            {expanded.win && (
              <p>Explore the home, connect with landlords, and experience the future of renting. No middleman, no hassle. With Zillstate, your next home is just a clicks away</p>
            )}
          </div> */}
        </div>
      </div>

    
    </div>
  );
};

export default PerksSection;
