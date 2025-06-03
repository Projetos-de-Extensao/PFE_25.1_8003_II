import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import LoginPage from './pages/LoginPage';
import CarrinhoPage from './pages/CarrinhoPage';
import './App.css';
import CategoriasPage from './pages/CategoriasPage';
import CriarEventoPage from './pages/CriarEventoPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/categorias" element={<CategoriasPage />} />
        <Route path="/carrinho" element={<CarrinhoPage />} />
        <Route path="/criar-evento" element={<CriarEventoPage/>} />
      </Routes>
    </Router>
  );
}

export default App;