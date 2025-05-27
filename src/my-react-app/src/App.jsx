import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importe suas páginas
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
 

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;