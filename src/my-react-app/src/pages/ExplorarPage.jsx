import Header from '../components/Header/Header'; 
import Footer from '../components/Footer/Footer';
import BackToHome from '../components/BackToHome/BackToHome';
import Explorar from '../components/Explorar/Explorar';
import '@fortawesome/fontawesome-free/css/all.min.css';



function ExplorarPage() {
  return (
    <>
      <Header/>
      <BackToHome/>
      <Explorar/>
      <Footer/>
    </>
  );
}

export default ExplorarPage;