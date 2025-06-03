import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD

// Importe suas páginas
import Home from './pages/home';

 

=======
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
>>>>>>> 1fe7040c9aa8458c7b5bc441f0c386473f51bb81
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
<<<<<<< HEAD
=======
          {/*<Route path="/login" element={<LoginPage />} />
          <Route path="/carrinho" element={<CarrinhoPage />} />
          <Route path="/explorar" element={<ExplorarEventos />} />
          <Route path="/categorias" element={<Categorias />} />*/}
>>>>>>> 1fe7040c9aa8458c7b5bc441f0c386473f51bb81
        </Routes>
      </div>
    </Router>
  );
}

export default App;