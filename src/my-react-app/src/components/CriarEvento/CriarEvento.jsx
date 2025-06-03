import React from 'react';
import { Link } from 'react-router-dom';
import './CriarEvento.css';

function CriarEvento() {
  return (
    <>
      <main className="container">
        <h1>Criar seu evento</h1>
        <p>Preencha os dados abaixo para começar a criação do seu evento. Você poderá editar essas informações posteriormente.</p>

        <section className="form-section">
          <h2>Informações básicas</h2>
          <label>Nome do evento*</label>
          <input type="text" placeholder="Digite o nome do seu evento" />

          <label>Categoria*</label>
          <select>
            <option>Selecione uma categoria</option>
          </select>

          <label>Descrição*</label>
          <textarea placeholder="Descreva seu evento em detalhes"></textarea>
        </section>

        <section className="form-section">
          <h2>Data e local</h2>
          <label>Data*</label>
          <div className="date-group">
            <input type="date" />
            <input type="time" />
          </div>

          <label>Local do evento*</label>
          <input type="text" placeholder="Nome do local" />

          <label>Endereço completo</label>
          <input type="text" placeholder="Endereço completo" />

          <div className="city-state">
            <div>
              <label>Cidade*</label>
              <input type="text" />
            </div>
            <div>
              <label>Estado*</label>
              <select>
                <option>Selecione</option>
              </select>
            </div>
          </div>
        </section>

        <section className="form-section">
          <h2>Ingressos</h2>
          <label>Nome do ingresso*</label>
          <input type="text" placeholder="Ex: Ingresso Standard" />

          <label>Preço (R$)*</label>
          <input type="number" placeholder="0.00" />

          <label>Quantidade disponível*</label>
          <input type="number" placeholder="100" />

          <button type="button" className="add-ticket">+ Adicionar outro ingresso</button>
        </section>

        <section className="form-section">
          <h2>Imagem do evento</h2>
          <div className="upload-box">
            <p>
              Clique para fazer upload ou arraste uma imagem<br />
              <small>Formatos: JPG ou PNG até 5MB</small>
            </p>
          </div>
        </section>

        <button type="submit" className="submit-btn">Criar evento</button>
      </main>

    
    </>
  );  
}

export default CriarEvento;
