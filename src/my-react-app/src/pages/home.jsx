import EventCard from '../components/EventCard/EventCard';
import Header from '../components/Header/Header'; 
import Footer from '../components/Footer/Footer';
import Menu from '../components/Menu/Menu';



function Home() {
  return (
    <>
      <Header />
      <Menu/>
      <EventCard/>
      <Footer />
    </>
  );
}

export default Home;