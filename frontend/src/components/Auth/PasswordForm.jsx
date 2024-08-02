// src/components/PasswordForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './PasswordForm.css';
import { useNavigate } from 'react-router-dom';

const PasswordForm = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handlePasswordSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:65243/api/verify-password', { password });
      if (response.data.success) {
        navigate('/username');
      } else {
        setError('Invalid password, please try again.');
      }
    } catch (err) {
      setError('An error occurred, please try again.');
    }
  };

  return (
    <div className="PasswordPage">
      <div className="logo">
        <img className= "CenteredImage MonopolyImage" src="monopoly.png" alt="" />
        <img className= "DealImage" src="deal.png" alt="" />
      </div>
      <form className="PasswordForm" onSubmit={handlePasswordSubmit}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter access password"
          required
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default PasswordForm;