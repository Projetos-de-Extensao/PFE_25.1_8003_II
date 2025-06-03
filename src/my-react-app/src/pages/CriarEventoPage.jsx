import Header from '../components/Header/Header'; 
import Footer from '../components/Footer/Footer';
import BackToHome from '../components/BackToHome/BackToHome';
import CriarEvento from '../components/CriarEvento/CriarEvento';
import '@fortawesome/fontawesome-free/css/all.min.css';



function CriarEventoPage() {
  return (
    <>
      <Header/>
      <BackToHome/>
      <CriarEvento/>
      <Footer/>
    </>
  );
}

export default CriarEventoPage;