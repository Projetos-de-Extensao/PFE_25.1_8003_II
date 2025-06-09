import Header from '../components/Header/Header'; 
import Footer from '../components/Footer/Footer';
import Newsletter from '../components/Newsletter/Newsletter';
import DepoimentosSection from '../components/DepoimentosSection/DepoimentosSection';
import NossosServicos from '../components/NossosServicos/NossosServicos';
import Carrossel from '../components/Carrossel/Carrossel';


function Home() {
  return (
    <>
      <Header />
      <Carrossel />
      <NossosServicos />
      <DepoimentosSection />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;