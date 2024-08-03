import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PasswordForm.css';

const PasswordForm = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = () => {
    const cognitoDomain = 'https://monopoly-deal.auth.us-west-1.amazoncognito.com'; // Your Cognito domain
    const clientId = '71ipn6j2kdalglfbn308k6qlgg'; // Your Cognito app client ID
    const redirectUri = 'http://localhost:3000/lobby'; // Your redirect URI

    const cognitoUrl = `${cognitoDomain}/login?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`;

    window.location.href = cognitoUrl;
  };

  return (
    <div className="PasswordForm">
      <button className="pillButton" onClick={handleSignIn}>Sign In</button>
      {error && <p className="errorMessage">{error}</p>}
    </div>
  );
};

export default PasswordForm;