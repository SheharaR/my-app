import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css'
import logo from '../assets/logo.png';
import lithuBackground from '../assets/Lithu.png';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Add your authentication logic here
    // For example:
    // authenticateUser(formData).then(success => {
    //   if (success) {
    //     navigate('/dashboard'); // Redirect to dashboard after successful login
    //   }
    // });
    
    // For testing purposes, you can directly navigate:
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <div className="logo-container">
          <div className="logo">
            <img src={logo} alt="Lithu Fashions Logo" className="logo-image" />
          </div>
        </div>

        <div className="welcome-text">
          <h2>Welcome to Lithu Fashions!</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="id">ID*</label>
            <input
              type="text"
              id="id"
              name="id"
              placeholder="Enter your ID"
              value={formData.id}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password*</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="••••••••••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-options">
            <div className="remember-me">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <div className="forgot-password">
              <a href="#">Forgot password?</a>
            </div>
          </div>

          <button type="submit" className="login-button">Login</button>
        </form>

        <div className="register-link">
          <p>Not registered yet? <Link to="/signup">Create a new account</Link></p>
        </div>
      </div>

      <div className="image-container">
      <img src={lithuBackground} alt="Lithu Fashions" className="background-image" />
        <div className="overlay-text">
        </div>
      </div>
    </div>
  );
};

export default LoginPage;