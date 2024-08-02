// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { playMusic } from './AudioController'; // Adjust the path as needed
import PasswordForm from './components/Auth/PasswordForm';
import UsernameForm from './components/Auth/UsernameForm';
// import LobbyPage from './components/LobbyPage'; //fixme

function App() {
  useEffect(() => {
    playMusic(); // Start playing music when the component mounts

    return () => {
      // Optionally, you can pause the music when the component unmounts
      // pauseMusic();
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/username" element={<UsernameForm />} />
        {/* <Route path="/lobby" element={<LobbyPage />} /> */}
        <Route path="/" element={<PasswordForm />} />
      </Routes>
    </Router>
  );
}

export default App;