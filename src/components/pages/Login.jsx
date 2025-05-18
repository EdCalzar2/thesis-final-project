import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Used to navigate to another page after login
import './Login.css';
import finalLogo from '../../assets/final_logo.png';

export default function Login() {
  // State variables to store user input and error messages
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook to programmatically navigate to another route

  // This function runs when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from reloading when the form is submitted
    // Check if username or password is empty
    if (!username || !password) {
      setError('Please fill out both username and password.'); // Show error if fields are empty
      return;
    }
    setError(''); // Clear any previous error messages
    // Simulate successful login, then redirect to Home page
    navigate('/home'); // Redirect to the Home component/page
  };

  return (
    <div className="login-wrapper">
      <div className="left-section">
        <h1>
          Your Voice.<br />
          Her Safety.
        </h1>
        <p>
          Share your <b>experiences</b> report <b>unsafe areas</b>, support each other — no one should <b>feel alone</b> in their <b>safety journey</b>.
        </p>
      </div>
      <div className="right-section">
        <div className="login-box">
          {/* Logo image */}
          <img src={finalLogo} alt="Logo" />
          {/* Login form */}
          <form onSubmit={handleSubmit}>
            {/* Show error message if there is one */}
            {error && (
              <div style={{ color: 'red', marginBottom: '12px', fontWeight: 'bold' }}>
                {error} {/*Prints the setError*/}
              </div>
            )}
            {/* Username input */}
            <label><b>Username</b></label>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)} // Update username state when input changes
            />
            {/* Password input */}
            <label><b>Password</b></label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)} // Update password state when input changes
            />
            {/* Submit button */}
            <button type="submit">Log in</button>
          </form>
          {/* Link for users who don't have an account */}
          <p className='account'>
            <a href="#">Don't have an account?</a>
          </p>
        </div>
      </div>
    </div>
  );
}
