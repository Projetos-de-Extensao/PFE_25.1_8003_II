import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import festifyLogo from '../assets/festify.jpg'; 
import Header from '../components/Header'; 
import Footer from '../components/Footer';

const ExplorarEventos = () => {
  const [busca, setBusca] = useState('');
  const [categoria, setCategoria] = useState('Todas as categorias');
  const [preco, setPreco] = useState(200);
  const [data, setData] = useState('Qualquer data');

  const handleClearFilters = () => {
    setBusca('');
    setCategoria('Todas as categorias');
    setPreco(200);
    setData('Qualquer data');
  };

  return (
    <>
      <Header />
        {BackToHome}
      <section className="explorar">
        <h1>Explorar Eventos</h1>
        <p>Encontre eventos perfeitos para você</p>

        <div className="filtros">
          <h2>Filtros</h2>

          <div className="filtro">
            <label htmlFor="busca">Buscar</label>
            <input
              type="text"
              id="busca"
              placeholder="Eventos, locais..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>

          <div className="filtro">
            <label htmlFor="categoria">Categoria</label>
            <select
              id="categoria"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            >
              <option>Todas as categorias</option>
              {/* Add more categories here if needed */}
              <option>Música</option>
              <option>Arte</option>
              <option>Esportes</option>
              <option>Comida & Bebida</option>
            </select>
          </div>

          <div className="filtro">
            <label>Preço: R$ 0 - R$ {preco}</label>
            <input
              type="range"
              min="0"
              max="200"
              value={preco}
              id="preco"
              className="slider"
              onChange={(e) => setPreco(e.target.value)}
            />
            <div className="preco-info">
              <span>R$ 0</span>
              <span>R$ 200+</span>
            </div>
          </div>

          <div className="filtro">
            <label htmlFor="data">Data</label>
            <select
              id="data"
              value={data}
              onChange={(e) => setData(e.target.value)}
            >
              <option>Qualquer data</option>
              {/* Add more date options here if needed */}
              <option>Hoje</option>
              <option>Esta semana</option>
              <option>Este mês</option>
            </select>
          </div>

          <button className="limpar" onClick={handleClearFilters}>
            Limpar filtros
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ExplorarEventos;