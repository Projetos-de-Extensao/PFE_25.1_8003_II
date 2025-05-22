import React from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Carrossel from './components/Carrossel';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Carrossel />
      <ServicesSection />
      <TestimonialsSection />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;