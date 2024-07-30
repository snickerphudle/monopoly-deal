import React from 'react';

const Player = ({ player }) => {
  return (
    <div>
      <h2>{player.name}</h2>
      <p>Hand: {JSON.stringify(player.hand)}</p>
      <p>Properties: {JSON.stringify(player.properties)}</p>
      <p>Cash: {JSON.stringify(player.cash)}</p>
    </div>
  );
};

export default Player;
