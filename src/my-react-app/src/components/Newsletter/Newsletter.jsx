import { Link } from 'react-router-dom';
import './Newsletter.css';


function Newsletter() {
  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-text">
          <h2>Lançamentos e novidades</h2>
          <p>Receba nossa newsletter com tendências, promoções e mais</p>
        </div>
        <form className="newsletter-form">
          <label htmlFor="email">Seu e-mail</label>
          <div className="input-group">
            <input type="email" id="email" name="email" required />
            <button type="submit">Cadastrar</button>
          </div>
          <div className="checkbox-group">
            <input type="checkbox" id="privacy" required />
            <label htmlFor="privacy">
              Aceito receber conteúdos e concordo com a <a href="#">Política de Privacidade</a>.
            </label>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;