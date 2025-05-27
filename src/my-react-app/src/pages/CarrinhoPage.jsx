import React, { useState } from 'react';
// import BotaoVoltar from '../components/BotaoVoltar'; // Componente não encontrado
// import CartItem from '../components/CartItem'; // Componente não encontrado
import Header from '../components/Header';
import Footer from '../components/Footer';
import visaLogo from '../assets/visa.svg'; 
import mastercardLogo from '../assets/mastercard.png';
import hipercardLogo from '../assets/hipercard.svg';
import pixLogo from '../assets/pix.png';
import '../styles/Carrinho.css'; 


const initialCartItems = [
    { id: 1, show: 'Evento 1', date: '20/07/2025', qty: 2, price: 200.00, type: 'Show' },
    { id: 2, show: 'Evento 2', date: '05/08/2025', qty: 1, price: 120.00, type: 'Festa' },
];

function Carrinho() {
    const [cartItems, setCartItems] = useState(initialCartItems);

    const handleRemoveItem = (itemId) => {
        setCartItems(cartItems.filter(item => item.id !== itemId));
        alert("Item removido do carrinho!");
       
    };

    const handleFinalizarCompra = () => {
        alert('Compra finalizada com sucesso! Obrigado por escolher o Festify!');
        
    };

    const total = cartItems.reduce((acc, item) => acc + item.price, 0);

    return (
        <> {}
            <Header />
              {BackToHome}
            <main className="main">
                <div className="container">
                    <h2><i className="fas fa-shopping-cart"></i> Carrinho de Compras</h2>

                    {cartItems.map(item => (
                        <div className="cart-item" key={item.id}>
                            <p><strong>{item.type}: {item.show}</strong></p>
                            <p>Data: {item.date}</p>
                            <p>Qtd: {item.qty} ingresso{item.qty > 1 ? 's' : ''}</p>
                            <p>Preço: R$ {item.price.toFixed(2)}</p>
                            <button className="btn-remove" onClick={() => handleRemoveItem(item.id)}>Remover</button>
                        </div>
                    ))}

                    <h4 className="payment-title">Formas de Pagamento:</h4>
                    <div className="payment-section">
                        <div className="payment-methods">
                            <img src={visaLogo} alt="Visa" />
                            <img src={mastercardLogo} alt="Mastercard" />
                            <img src={hipercardLogo} alt="Hipercard" />
                            <img src={pixLogo} alt="Pix" />
                        </div>
                        <div className="total">
                            <h3>Total: R$ {total.toFixed(2)}</h3>
                            <button className="btn-finalizar" onClick={handleFinalizarCompra}>
                                Finalizar Compra
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Carrinho;