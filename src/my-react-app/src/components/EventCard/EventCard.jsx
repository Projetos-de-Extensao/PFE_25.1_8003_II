
import { Link } from 'react-router-dom';
import './EventCard.css';

function EventCard() {
  return (
   <div class="event-card">
          <img src="teatro1.jpg" alt="Figa Festival" />
          <h3>Evento 1</h3>
          <p>Plaza Shopping</p>
          <p>1 de maio de 2025</p>
          <p>R$ 150</p>
        </div>
  );
}

export default EventCard;