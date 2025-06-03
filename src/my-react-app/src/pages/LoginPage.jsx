
import Header from '../components/Header/Header'; 
import Footer from '../components/Footer/Footer';
import BackToHome from '../components/BackToHome/BackToHome';
import Formulario from '../components/Formulario/Formulario';
import '@fortawesome/fontawesome-free/css/all.min.css';



function LoginPage() {
  return (
    <>
      <Header />
      <BackToHome/>
      <Formulario/>
      <Footer />
    </>
  );
}

export default LoginPage;