import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import './App.css';
import Carrinho from './pages/CarrinhoPage';
import ExplorarEventos from './pages/ExplorarPage';
import Categorias from './pages/CategoriaPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/*<Route path="/login" element={<LoginPage />} />
          <Route path="/carrinho" element={<CarrinhoPage />} />
          <Route path="/explorar" element={<ExplorarEventos />} />
          <Route path="/categorias" element={<Categorias />} />*/}
        </Routes>
      </div>
    </Router>
  );
}

export default App;