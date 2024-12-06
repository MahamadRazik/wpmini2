import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProfilePage from './components/ProfilePage';
import JobDetails from './components/JobDetails';
import ChatPage from './components/ChatPage';  // Import ChatPage component
import Login from './components/login'; // Corrected import for Login component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/chat" element={<ChatPage />} />  {/* Chat Route */}
          <Route path="/login" element={<Login />} />  {/* Login Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
