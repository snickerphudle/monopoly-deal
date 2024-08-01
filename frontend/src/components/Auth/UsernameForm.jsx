// src/components/UsernameForm.js

import React, { useState } from 'react';
import axios from 'axios';

const UsernameForm = ({ onUsernameSubmit }) => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleUsernameSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/set-username', { username });
      if (response.data.success) {
        onUsernameSubmit();
      } else {
        setError('Username already taken, please try another one.');
      }
    } catch (err) {
      setError('An error occurred, please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleUsernameSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
          required
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default UsernameForm;
