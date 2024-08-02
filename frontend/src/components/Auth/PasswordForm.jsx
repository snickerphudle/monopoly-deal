import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './PasswordForm.css';

const PasswordForm = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  // const audioRef = useRef(null);

  const handlePasswordSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:65243/api/verify-password', { password });
      if (response.data.success) {
        // audioRef.current.play();
        navigate('/username');
      } else {
        setError('Invalid password. Please try again.');
      }
    } catch (err) {
      setError('An error occurred, please try again.');
    }
  };

  return (
    <div className="PasswordForm">
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
      {error && <p className="errorMessage">{error}</p>}
      {/* <audio ref={audioRef} src="game-bgm.mp3" /> */}
    </div>
  );
};

export default PasswordForm;