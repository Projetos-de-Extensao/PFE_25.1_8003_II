
import { Link } from 'react-router-dom';
import './Newsletter.css';


function Newsletter() {
  return (
  <section class="newsletter-section">
    <div class="newsletter-container">
      <div class="newsletter-text">
        <h2>Lançamentos e novidades</h2>
        <p>Receba nossa newsletter com tendências, promoções e mais</p>
      </div>
      <form class="newsletter-form">
        <label for="email">Seu e-mail</label>
        <div class="input-group">
          <input type="email" id="email" name="email" required />
          <button type="submit">Cadastrar</button>
        </div>
        <div class="checkbox-group">
          <input type="checkbox" id="privacy" required />
          <label for="privacy">
            Aceito receber conteúdos e concordo com a <a href="#">Política de Privacidade</a>.
          </label>
        </div>
      </form>
    </div>
  </section>

  );
}

export default Newsletter;