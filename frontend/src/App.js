// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PasswordForm from './components/Auth/PasswordForm';
import UsernameForm from './components/Auth/UsernameForm';
// import LobbyPage from './components/LobbyPage'; //fixme

function App() {
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