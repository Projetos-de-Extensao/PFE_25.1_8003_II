
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
import './LoginPage.css'; 

function LoginPage() {
  const [passwordShown, setPasswordShown] = useState(false); 
  const navigate = useNavigate(); 


  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  
  const handleLoginSubmit = (event) => {
    event.preventDefault(); 
  
    console.log("Tentativa de login...");
   
   

    navigate('/'); 
  };

  return (
    <>
      {}
      <Header />

      <div className="back-to-home">
        {}
        <Link to="/" className="btn-voltar">
          <i className="fas fa-arrow-left"></i> Voltar para o início
        </Link>
      </div>

      <main className="main-login"> {}
        <div className="login-container"> {}
          <h2>ACESSE SUA CONTA</h2>

          <form onSubmit={handleLoginSubmit}>
            <div className="input-group">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="E-mail, CPF ou CNPJ" required />
            </div>

            <div className="input-group">
              <i className="fas fa-lock"></i>
              <input
                type={passwordShown ? "text" : "password"}
                placeholder="Senha"
                required
              />
              <i
                className={`fas ${passwordShown ? 'fa-eye-slash' : 'fa-eye'} toggle-password`}
                onClick={togglePasswordVisibility}
              ></i>
            </div>

            <button type="submit" className="btn-login">
              <i className="fas fa-sign-in-alt"></i> ENTRAR
            </button>

            <div className="forgot-password">
              <Link to="#">Esqueceu a senha?</Link>
            </div>

            <div className="divider"><span>OU</span></div>

            <p>Quero acessar com minhas redes sociais</p>

            <button type="button" className="btn-social google"><i className="fab fa-google"></i> Google</button>
            <button type="button" className="btn-social apple"><i className="fab fa-apple"></i> Apple</button>

            <p className="register">Novo no Festify! <Link to="#">CADASTRE-SE</Link></p>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default LoginPage;