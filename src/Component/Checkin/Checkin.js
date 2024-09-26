import React from "react";
import { FaUser, FaUserTie } from "react-icons/fa";
import "./Checkin.css";


function Checkin() {
  const handleUserSignup = () => {
    console.log("User signup clicked");
    // Add navigation or action for user sign-up
  };

  const handleLandlordSignup = () => {
    console.log("Landlord signup clicked");
    // Add navigation or action for landlord sign-up
  };

  return (
    <>
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
    </>
  );
}

export default Checkin;


