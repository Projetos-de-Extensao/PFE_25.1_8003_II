import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import LoginPage from './pages/LoginPage';
import CarrinhoPage from './pages/CarrinhoPage';
import './App.css';
import ExplorarPage from './pages/ExplorarPage';


function App() {
  
  
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/carrinho" element={<CarrinhoPage />} />
        <Route path="/explorar" element={<ExplorarPage/>} />

      </Routes>
    </Router>
  );
}

export default App;




