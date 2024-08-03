import React, { useEffect, useRef, useState } from 'react';

const Lobby = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayMusic = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    }
  }, [isPlaying]);

  return (
    <div>
      <h1>Welcome to the Lobby</h1>
      {!isPlaying && (
        <button onClick={handlePlayMusic}>Play Music</button>
      )}
      <audio ref={audioRef} src="game-bgm.mp3" loop />
    </div>
  );
};

export default Lobby;