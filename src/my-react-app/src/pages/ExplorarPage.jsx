

import { useState, useEffect, useMemo } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import BackToHome from '../components/BackToHome/BackToHome';
import Explorar from '../components/Explorar/Explorar';
import EventList from '../components/EventList/EventList'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

function ExplorarPage() {
 
  const [events, setEvents] = useState([]);
 
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');


  useEffect(() => {
    const fetchEvents = async () => {
      try {
        
        const response = await fetch('http://localhost:3001/events');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Erro ao buscar eventos:", error);
      }
    };

    fetchEvents();
  }, []); 

 
  const filteredEvents = useMemo(() => {
    return events.filter(event => {
     
      const matchesSearchTerm = event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                event.location.toLowerCase().includes(searchTerm.toLowerCase());

      
      
      
      return matchesSearchTerm; 
    });
  }, [events, searchTerm, category]);

  return (
    <>
      <Header />
      <BackToHome />
      {}
      <Explorar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        category={category}
        setCategory={setCategory}
      />
      {}
      <EventList events={filteredEvents} />
      <Footer />
    </>
  );
}

export default ExplorarPage;