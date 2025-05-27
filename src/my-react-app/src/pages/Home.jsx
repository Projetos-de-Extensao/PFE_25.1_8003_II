import React from 'react';
import Header from '../components/Header'; 
import CategoryMenu from '../components/Menu'; 
import EventCarousel from '../components/Carrossel'; 
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import NewsletterSection from '../components/Newsletter'; 
import Footer from '../components/Footer';



function Home() {
  return (
    <>
      <Header />
      <CategoryMenu />
      <EventCarousel />
      <ServicesSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </>
  );
}

export default Home;