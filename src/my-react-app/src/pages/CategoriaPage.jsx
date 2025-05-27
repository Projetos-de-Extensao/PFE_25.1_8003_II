import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import BackToHome from '../components/BacktoHome';


{/*const categories = [
    { name: 'Música e Shows', events: 257, image: musicaImg },
    
];*/}

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
            {BackToHome}
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