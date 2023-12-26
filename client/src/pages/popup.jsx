import React, { useState } from 'react';
import '../App.css';
import { MdOutlineClose } from 'react-icons/md';
import login from '../sources/login.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ForgotPassword = ({ onCancel }) => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState(''); // New state for the new password
  const [resetSent, setResetSent] = useState(false);

  const handleForgotPassword = async (e) => {
    e.preventDefault();
  
    try {
      // Assuming you have the 'password' state in your component
      const response = await axios.post('https://arjit-sl2-mern-app.vercel.app/auth/forgot-password', {
        email,
        newPassword: newPassword,  // Include the new password in the request
      });
  
      if (response.data === 'reset_sent') {
        setResetSent(true);
      }
  
      // Assuming your API returns the user's first name after a successful login
      // Adjust this part based on how your backend sends the user details
  
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <div>
      {resetSent ? (
        <p>Password reset link sent to your email. Follow the instructions in the email.</p>
      ) : (
        <form onSubmit={handleForgotPassword}>
          <label htmlFor="email">Enter your email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          {/* New input for the new password */}
          <label htmlFor="newPassword">Enter your new password:</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <br />
          <button type="submit">Submit</button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

const Popup = ({ onClose, isPopupVisible }) => {
  const [isSignUp, setSignUp] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    onClose();

    const formData = new FormData(e.target);
    const userData = {};
    formData.forEach((value, key) => {
      userData[key] = value;
    });

    const apiUrl = isSignUp ? 'https://arjit-sl2-mern-app.vercel.app/auth/register' : 'https://arjit-sl2-mern-app.vercel.app/auth/login';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        // Handle successful authentication, maybe store user token or do other actions
        navigate('/home');
      } else {
        // Handle authentication failure, maybe show an error message
        alert('Authentication failed');
        console.error('Authentication failed');
      }
    } catch (error) {
      console.error('Error during authentication:', error);
    }
  };

  const handleForgotPasswordClick = () => {
    setShowForgotPassword(true);
  };

  const handleClose = () => {
    onClose();
    setShowForgotPassword(false);
  };

  return (
    <div id="overlay" className="overlay" style={{ display: isPopupVisible ? 'flex' : 'none' }}>
      <div id="popup" className="popup">
        <div className="close-btn" onClick={handleClose}>
          <MdOutlineClose />
        </div>
        <div className="div1">
          <h2>{isSignUp ? 'Create Account' : 'Sign In'}</h2>
          {showForgotPassword ? (
            <ForgotPassword onCancel={() => setShowForgotPassword(false)} />
          ) : (
            <form onSubmit={handleSubmit}>
              {isSignUp && (
                <>
                  <label htmlFor="firstName">First Name:</label>
                  <input type="text" id="firstName" name="firstName" required />
                  <br />

                  <label htmlFor="lastName">Last Name:</label>
                  <input type="text" id="lastName" name="lastName" required />
                  <br />
                </>
              )}

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <br />

              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <br />

              <button type="submit">{isSignUp ? 'Create Account' : 'Sign In'}</button>
              <p>
                <Link to="#" onClick={handleForgotPasswordClick}>
                  Forgot Password?
                </Link>
              </p>
            </form>
          )}
        </div>
        <div className="div2">
          <p style={{ position: 'relative', right: '40%' }}>
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}
          </p>
          <a
            onClick={() => {
              setSignUp(!isSignUp);
              setShowForgotPassword(false);
            }}
            style={{
              position: 'absolute',
              color: 'blue',
              top: '3.8%',
              cursor: 'pointer',
              left: '60%',
            }}
          >
            <nobr>{isSignUp ? 'Sign In' : 'Create Account'}</nobr>
          </a>
        </div>
        <img src={login} className="login-img" alt=""></img>
        <div className="p555">
          <p>
            By {isSignUp ? 'Signing Up' : 'Signing In'} you're agreeing to our <br></br>
            Terms & Conditions, Privacy policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
