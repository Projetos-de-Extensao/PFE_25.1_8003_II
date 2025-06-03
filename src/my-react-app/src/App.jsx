
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importe suas páginas
import Home from './pages/home';

 

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;