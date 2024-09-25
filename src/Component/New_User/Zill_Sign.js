import React, { useState } from "react";
import { FaGoogle, FaApple } from "react-icons/fa";
import "./Zill_Sign.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

function ZillSign() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle sign-in form submission
  const handleSignIn = (e) => {
    e.preventDefault();
    // Handle form logic here
    console.log("Email:", email);
    console.log("Password:", password);
    // Add authentication logic
  };

  const handleGoogleLogin = () => {
    // Add Google login logic here
    console.log("Continue with Google");
  };

  const handleWalletLogin = () => {
    // Add Wallet login logic here
    console.log("Continue with Wallet");
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/checkin'); // Replace '/target-page' with your desired path
  };

  return (
    <div className="auth-form-container">
      <h1>Welcome to Zillstate</h1>
      <div className="tabs">
        <span className="tab" onClick={handleClick}>Sign in</span>
        <span className="tab active">New account</span>
      </div>
      <form onSubmit={handleSignIn}>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Link to="/signup">
        <button type="submit" className="sign-in-btn">
          Sign in
        </button>
        </Link>
        
      </form>
      <div className="forgot-password">
        <a href="/">Forgot your password?</a>
      </div>
      <div className="divider">Or signup with</div>
      <div className="social-login">
        <button className="google-btn" onClick={handleGoogleLogin}>
          <FaGoogle /> Continue with Google
        </button>
        <button className="wallet-btn" onClick={handleWalletLogin}>
          <FaApple /> Continue with Wallet
        </button>
      </div>
    </div>
  );
}

export default ZillSign;
