import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import LoginPage from './pages/LoginPage';
import './App.css';
import CategoriasPage from './pages/CategoriasPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/categorias" element={<CategoriasPage />} />
      </Routes>
      
    </Router>
  );
}

export default App;