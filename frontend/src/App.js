// App.js
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './components/auth/LandingPage';
import UsernameForm from './components/auth/UsernameForm';
import LobbyPage from './components/views/Lobby';
import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/lobby" element={<ProtectedRoute element={LobbyPage} />} />
            <Route path="*" element={<Navigate to="/lobby" />} />
            <Route path="/username" element={<UsernameForm />} />
            
            <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </Router>
  );
}

export default App;