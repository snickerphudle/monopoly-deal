// src/components/PasswordForm.js

import React, { useState } from 'react';
import axios from 'axios';

const PasswordForm = ({ onAuthSuccess }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handlePasswordSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/verify-password', { password });
      if (response.data.success) {
        onAuthSuccess();
      } else {
        setError('Invalid password, please try again.');
      }
    } catch (err) {
      setError('An error occurred, please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handlePasswordSubmit}>
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
