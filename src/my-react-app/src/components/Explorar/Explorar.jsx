// src/my-react-app/src/components/Explorar/Explorar.jsx

import React from 'react';
import './Explorar.css';

// Receba as props para controlar os filtros
function Explorar({ searchTerm, setSearchTerm, category, setCategory }) {
  
  const handleClearFilters = () => {
    setSearchTerm('');
    setCategory('');
    // Limpe outros estados de filtro aqui
  };

  return (
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
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filtro">
          <label htmlFor="categoria">Categoria</label>
          <select 
            id="categoria"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Todas as categorias</option>
            <option value="Concert">Show</option>
            <option value="Art Exhibition">Arte e Cultura</option>
            <option value="Tech Conference">Tecnologia</option>
            {/* Adicione outras categorias conforme necessário */}
          </select>
        </div>
        
        {/* Outros filtros podem ser adicionados aqui da mesma forma */}

        <button className="limpar" onClick={handleClearFilters}>Limpar filtros</button>
      </div>
    </section>
  );
}

export default Explorar;