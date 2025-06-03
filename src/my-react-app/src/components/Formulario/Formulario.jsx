import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Formulario.css';


function Formulario() {
  const [showPassword, setShowPassword] = useState(false);

  function togglePassword() {
    setShowPassword((prev) => !prev);
  }

  function handleLogin(event) {
    event.preventDefault();
    alert("Login realizado com sucesso! Seja bem-vindo ao Festify!");
  }

  return (
    <main className="main">
      <div className="container">
        <h2>ACESSE SUA CONTA</h2>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="E-mail, CPF ou CNPJ" required />
          </div>

          <div className="input-group">
            <i className="fas fa-lock"></i>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              required
              id="senha"
            />
            <i
              className="fas fa-eye toggle-password"
              onClick={togglePassword}
              style={{ cursor: "pointer" }}
              title="Mostrar/ocultar senha"
            ></i>
          </div>

          <button type="submit" className="btn-login">
            <i className="fas fa-sign-in-alt"></i> ENTRAR
          </button>

          <div className="forgot-password">
            <a href="#">Esqueceu a senha?</a>
          </div>

          <div className="divider"><span>OU</span></div>

          <p>Quero acessar com minhas redes sociais</p>

          <button type="button" className="btn-social google">
            <i className="fab fa-google"></i> Google
          </button>
          <button type="button" className="btn-social apple">
            <i className="fab fa-apple"></i> Apple
          </button>

          <p className="register">
            Novo no Festify! <a href="#">CADASTRE-SE</a>
          </p>
        </form>
      </div>
    </main>
    );
}

export default Formulario;