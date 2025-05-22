import React from 'react';
import './Footer.css'; 

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div>
          <h4>Institucional</h4>
          <ul>
            <li><a href="#">Quem somos</a></li>
            <li><a href="#">Trabalhe conosco</a></li>
            <li><a href="#">Termos de uso</a></li>
            <li><a href="#">Política de privacidade</a></li>
          </ul>
        </div>
        <div>
          <h4>Ajuda</h4>
          <ul>
            <li><a href="#">Central de atendimento</a></li>
            <li><a href="#">Entregas e prazos</a></li>
            <li><a href="#">Trocas e devoluções</a></li>
            <li><a href="#">Fale conosco</a></li>
          </ul>
        </div>
        <div>
          <h4>Contato</h4>
          <p><i className="fas fa-envelope"></i> suportefestify@gmail.com</p>
          <p><i className="fas fa-phone"></i> (21) 2199-0876</p>
          <p><i className="fas fa-map-marker-alt"></i> Rua Exemplo, 123 - RJ</p>
        </div>
        <div>
          <h4>Redes sociais</h4>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
      <p className="copyright">&copy; 2025 Festify. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;