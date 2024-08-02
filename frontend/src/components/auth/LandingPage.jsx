import React from 'react';
import PasswordForm from './PasswordForm';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <div className="logo">
        <img className="CenteredImage MonopolyImage" src="monopoly.png" alt="Monopoly" />
        <img className="DealImage" src="deal.png" alt="Deal" />
      </div>
      <PasswordForm />
    </div>
  );
};

export default LandingPage;