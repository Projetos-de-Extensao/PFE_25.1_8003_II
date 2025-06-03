import Header from '../components/Header/Header'; 
import Footer from '../components/Footer/Footer';
import BackToHome from '../components/BackToHome/BackToHome';
import CategoriasEventos from '../components/CategoriasEventos/CategoriasEventos';



function CategoriasPage() {
  return (
    <>
      <Header />
      <BackToHome/>
       <CategoriasEventos/>
      <Footer />
    </>
  );
}

export default CategoriasPage;