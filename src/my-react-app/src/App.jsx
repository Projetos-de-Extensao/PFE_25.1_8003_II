
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importe suas páginas
import Home from './pages/home';
import LoginPage from './pages/LoginPage';
 

import './App.css';

function App() {
  return (
    <Router> {}
      <div className="App">
        {}
        {}

        <Routes> {}
          <Route path="/" element={<Home />} /> {}
          <Route path="/about" element={<About />} /> {}
          <Route path="/contact" element={<Contact />} /> {}
          <Route path="/login" element={<LoginPage />} />
          {}
          {}
          {}
        </Routes>

        {}
      </div>
    </Router>
  );
}

export default App;