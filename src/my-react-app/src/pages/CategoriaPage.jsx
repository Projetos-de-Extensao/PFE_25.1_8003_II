import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import BotaoVoltar from '../components/BotaoVoltar'; // Componente não encontrado
import musicaImg from '../assets/musica.jpg'; 
import '../styles/Categorias.css';

const categories = [
    { name: 'Música e Shows', events: 257, image: musicaImg },
    
];

function CategoryCard({ name, events, image }) {
    return (
       
        <div className="card" style={{ backgroundImage: `url(${image})` }}>
            <div className="info">
                <h3>{name}</h3>
                <p>{events} eventos</p>
            </div>
        </div>
    );
}

function Categorias() {
    return (
        <>
            <Header />
            {/* <BotaoVoltar /> */}
            <section className="container">
                <h2>Categorias de Eventos</h2>
                <div className="grid">
                    {categories.map(cat => (
                        <CategoryCard
                            key={cat.name}
                            name={cat.name}
                            events={cat.events}
                            image={cat.image}
                        />
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Categorias;