
import Header from '../components/Header/Header'; 
import Footer from '../components/Footer/Footer';
import Menu from '../components/Menu/Menu';
import Newsletter from '../components/Newsletter/Newsletter';
import DepoimentosSection from '../components/DepoimentosSection/DepoimentosSection';



function Home() {
  return (
    <>
      <Header />
      <Menu/>
       <DepoimentosSection/>
      <Newsletter/>
      <Footer />
    </>
  );
}

export default Home;