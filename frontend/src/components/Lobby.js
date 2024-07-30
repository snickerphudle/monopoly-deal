import React, { useState } from 'react';
import axios from 'axios';

const Lobby = () => {
  const [lobbyCode, setLobbyCode] = useState('');
  const [playerName, setPlayerName] = useState('');

  const createLobby = async () => {
    const response = await axios.post('http://localhost:5000/api/games/create', { /* initial game state */ });
    setLobbyCode(response.data._id);
  };

  const joinLobby = async () => {
    await axios.post('http://localhost:5000/api/players/add', { name: playerName, game: lobbyCode });
  };

  return (
    <div>
      <h1>Lobby</h1>
      <button onClick={createLobby}>Create Lobby</button>
      <input value={lobbyCode} onChange={(e) => setLobbyCode(e.target.value)} placeholder="Enter Lobby Code" />
      <input value={playerName} onChange={(e) => setPlayerName(e.target.value)} placeholder="Enter Your Name" />
      <button onClick={joinLobby}>Join Lobby</button>
    </div>
  );
};

export default Lobby;
