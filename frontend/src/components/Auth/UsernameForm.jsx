// UsernameForm.jsx
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function UsernameForm() {
  const [username, setUsername] = useState('');
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Save username and proceed
      await axios.post('/api/set-username', { username });
      history.push('/lobby');
    } catch (error) {
      console.error('Error setting username', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UsernameForm;
