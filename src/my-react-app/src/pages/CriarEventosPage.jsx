import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import BotaoVoltar from '../components/BotaoVoltar'; // Componente não encontrado
import '../styles/CriarEvento.css';

function CriarEvento() {
    const [eventName, setEventName] = useState('');
    

    const handleSubmit = (event) => {
        event.preventDefault(); 
        console.log({ eventName,  });
        alert('Evento criado!');
    };

    return (
        <>
            <Header />
            {/* <BotaoVoltar /> */}
            <main className="container">
                <h1>Criar seu evento</h1>
                <p>Preencha os dados abaixo...</p>

                <form onSubmit={handleSubmit}> {}
                    <section className="form-section">
                        <h2>Informações básicas</h2>
                        <label htmlFor="eventName">Nome do evento*</label> {}
                        <input
                            type="text"
                            id="eventName"
                            placeholder="Digite o nome do seu evento"
                            value={eventName}
                            onChange={(e) => setEventName(e.target.value)}
                            required 
                        />
                        {}
                    </section>

                    {}

                    <section className="form-section">
                        <h2>Imagem do evento</h2>
                        <div className="upload-box">
                           {}
                           <input type="file" accept="image/jpeg, image/png" />
                           <p>Clique para fazer upload ou arraste uma imagem<br /><small>Formatos: JPG ou PNG até 5MB</small></p>
                        </div>
                    </section>

                    <button type="submit" className="submit-btn">Criar evento</button>
                </form>
            </main>
            <Footer />
        </>
    );
}

export default CriarEvento;