import React, { useState } from 'react';
import img from '../assets/Cover.png';
import img1 from '../../Signin/assets/eye-off.png';
import { Link } from "react-router-dom";

import './SignIn1.scss';

const SignIn1 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = () => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }

    // if (!emailRegex.test(email)) {
    //   setEmailError('Invalid email address. Please include "@" symbol.');
    // } else {
    //   setEmailError('');
    // }
  };

  const validatePassword = () => {
    // Password length validation
    if (password.length < 8 || password.length > 16) {
      setPasswordError('Password must be between 8 and 16 characters');
      return;
    }

    // Password complexity validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError('Password must contain atleast one lowercase, one uppercase, and one number');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if both email and password are entered
    if (!email || !password) {
      alert('Missing Required Fields. Please enter valid details.');
      return;
    }

    // Validate email and password
    validateEmail();
    validatePassword();

    // If no errors, show popup for successful login or redirect to another page
    if (!emailError && !passwordError) {
      // You can replace the following line with your own logic for redirection or showing a popup
      alert('Login successful!'); // Show a popup for successful login
      // OR
      // Redirect logic here with a welcome message
      window.location.href = '/welcome?email=' + encodeURIComponent(email);
    }
  };

  return (
    <div className="container">

      <div className="signin">
        <img src={img} alt="" />
      </div>

      <div className="left">
        <div className="left_side">
          <h1>Sign In to your Account</h1>
          <p>Welcome back! please enter your detail</p>
        </div>

        <div className="right_side">
          <form onSubmit={handleSubmit}>
            <div>
              <input type="text" placeholder='Enter your Email' value={email} onChange={(e) => setEmail(e.target.value)} onBlur={validateEmail} />
              {emailError && <p>{emailError}</p>}
            </div>
            <div className='pass'>
              <input type="password" placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)} onBlur={validatePassword} />
              {passwordError && <p>{passwordError}</p>}
            </div>

            <div className='image'>
              <img src={img1} alt="vbjj" />
            </div>

            <Link to="#">Forgot Password?</Link>

            <button type="submit">Sign in</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn1;
