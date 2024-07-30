import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

const Game = () => {
  const [gameState, setGameState] = useState(null);

  useEffect(() => {
    socket.on('gameState', (state) => {
      setGameState(state);
    });

    return () => {
      socket.off('gameState');
    };
  }, []);

  return (
    <div>
      <h1>Game</h1>
      {gameState && <pre>{JSON.stringify(gameState, null, 2)}</pre>}
    </div>
  );
};

export default Game;
