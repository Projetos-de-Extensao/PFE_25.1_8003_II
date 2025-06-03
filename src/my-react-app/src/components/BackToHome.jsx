import React from 'react';
import { Link } from 'react-router-dom'; 
import '@fortawesome/fontawesome-free/css/all.min.css'; 

const BackToHome = () => {
  return (
    <div className="back-to-home">
      {/* Use Link component for internal navigation */}
      <Link to="/" className="btn-voltar">
        <i className="fas fa-arrow-left"></i> Voltar para o início
      </Link>
    </div>
  );
};

export default BackToHome;