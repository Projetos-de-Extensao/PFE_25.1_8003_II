import { Link } from 'react-router-dom';
import './Carrinho.css';


function Carrinho() {
  return (
   <main className="main">
        <div className="container">
            <h2><i className="fas fa-shopping-cart"></i> Carrinho de Compras</h2>

            <div className="cart-item">
                <p><strong>Show: Evento 1</strong></p>
                <p>Data: 20/07/2025</p>
                <p>Qtd: 2 ingressos</p>
                <p>Preço: R$ 200,00</p>
                <button className="btn-remove">Remover</button>
            </div>

            <div className="cart-item">
                <p><strong>Festa: Evento 2</strong></p>
                <p>Data: 05/08/2025</p>
                <p>Qtd: 1 ingresso</p>
                <p>Preço: R$ 120,00</p>
                <button className="btn-remove">Remover</button>
            </div>

            <h4 className="payment-title">Formas de Pagamento:</h4>
            <div className="payment-section">
                <div className="payment-methods">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Hipercard_logo.svg" alt="Hipercard" />
                    <img src="/pix.png" alt="Pix" />
                </div>

                <div className="total">
                    <h3>Total: R$ 320,00</h3>
                    <button className="btn-finalizar">Finalizar Compra</button>
                </div>
            </div>
        </div>
    </main>
  );
}

export default Carrinho;