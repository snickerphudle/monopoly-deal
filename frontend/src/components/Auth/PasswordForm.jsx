// PasswordForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

function PasswordForm({ onSuccess }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/login', { password });
      if (response.data.success) {
        onSuccess();
      } else {
        setError('Invalid password');
      }
    } catch (error) {
      setError('Error verifying password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Enter</button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default PasswordForm;
