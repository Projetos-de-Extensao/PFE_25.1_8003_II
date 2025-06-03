
import Header from '../components/Header/Header'; 
import Footer from '../components/Footer/Footer';
import Menu from '../components/Menu/Menu';
import Newsletter from '../components/Newsletter/Newsletter';
import DepoimentosSection from '../components/DepoimentosSection/DepoimentosSection';
<<<<<<< HEAD
import NossosServicos from '../components/NossosServicos/NossosServicos';
=======
import Carrossel from '../components/Carrossel/Carrossel';
>>>>>>> 80b75ca7c2b60ce631144eb778d489fed905e1c2


function Home() {
  return (
    <>
      <Header />
      <Menu/>
<<<<<<< HEAD
       <EventCard/>
      <NossosServicos />
=======
      <Carrossel />
       
>>>>>>> 80b75ca7c2b60ce631144eb778d489fed905e1c2
      <DepoimentosSection/>
      <Newsletter/>
      <Footer />
    </>
  );
}

export default Home;