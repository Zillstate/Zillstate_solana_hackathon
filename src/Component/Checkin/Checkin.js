import React from "react";
import { FaUser, FaUserTie } from "react-icons/fa";
import "./Checkin.css";
import { Link } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';


function Checkin() {
  const handleUserSignup = () => {
    navigate('/zill_sign'); 
    // console.log("User signup clicked");
    // Add navigation or action for user sign-up
    
  };

  const navigate = useNavigate();
  const handleLandlordSignup = () => {
    navigate('/landlord'); 
    // console.log("Landlord signup clicked");
    // Add navigation or action for landlord sign-up
  };

  return (
    <>
    <h2 className="join_us">How will you like to join Zillstate?</h2>
    <div className="signup-container">
      <div className="signup-card">
        <div className="sign_icon_text">
          <div className="signup-icon">
            <FaUser size={20} />
          </div>
          <h2>Sign up as a user</h2>
        </div>
        <p>
          Separated that they don’t live in Bookmark grove and they live in
          markst live in Bookmarks grove and they live in marks.
        </p>
        <button className="signup-btn" onClick={handleUserSignup}>
          Continue as user
        </button>
      </div>
      <div className="divided"></div>
      <div className="signup-card">
        <div className="sign_icon_text">
          <div className="signup-icon">
            <FaUserTie size={20} />
          </div>
          <h2>Sign up as a landlord</h2>
        </div>
        <p>
          How would you like to join Zillstate? How would you like to join Zillstate grove and they live in marks?
        </p>
        <button className="signup-btn" onClick={handleLandlordSignup}>
          Continue as landlord
        </button>
      </div>
    </div>
    <div className="account_setup">
      <p>Have an account already? 
      <Link to="/zill_sign" class>
            Sign up
          </Link></p>
    </div>

    </>
  );
}

export default Checkin;


