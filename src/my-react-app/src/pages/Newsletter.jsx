import React from 'react';
import './Newsletter.css'; 

function Newsletter() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulário de Newsletter enviado!');
    
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-text">
          <h2>Lançamentos e novidades</h2>
          <p>Receba com exclusividade a nossa newsletter com tendências, promoções e muito mais</p>
        </div>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <label htmlFor="email">SEU EMAIL</label>
          <div className="input-group">
            <input type="email" id="email" name="email" required />
            <button type="submit">CADASTRAR</button>
          </div>
          <div className="checkbox-group">
            <input type="checkbox" id="privacy" required />
            <label htmlFor="privacy">
              Aceito receber conteúdos e concordo com a <a href="#">Política de Privacidade</a>
            </label>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;