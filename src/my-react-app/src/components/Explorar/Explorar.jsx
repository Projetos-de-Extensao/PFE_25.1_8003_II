import { Link } from 'react-router-dom';
import './Explorar.css';

function Explorar() {
  return (
    <section className="explorar">
      <h1>Explorar Eventos</h1>
      <p>Encontre eventos perfeitos para você</p>

      <div className="filtros">
        <h2>Filtros</h2>

        <div className="filtro">
          <label htmlFor="busca">Buscar</label>
          <input type="text" id="busca" placeholder="Eventos, locais..." />
        </div>

        <div className="filtro">
          <label htmlFor="categoria">Categoria</label>
          <select id="categoria">
            <option>Todas as categorias</option>
          </select>
        </div>

        <div className="filtro">
          <label>Preço: R$ 0 - R$ 200</label>
          <input type="range" min="0" max="200" defaultValue="200" id="preco" className="slider" />
          <div className="preco-info">
            <span>R$ 0</span>
            <span>R$ 200+</span>
          </div>
        </div>

        <div className="filtro">
          <label htmlFor="data">Data</label>
          <select id="data">
            <option>Qualquer data</option>
          </select>
        </div>

        <button className="limpar">Limpar filtros</button>
      </div>
    </section>
  );
}

export default Explorar;