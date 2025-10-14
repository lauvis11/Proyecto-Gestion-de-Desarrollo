import { CreditCard, RefreshCw, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import "./FormasDePago.css"

export default function FormasDePago() {
  return (
    <section className="info-section">
      <div className="info-container">
        
        {/* Tarjeta 1 */}
        <div className="info-card">
          <div className="info-icono">
            <CreditCard size={28} strokeWidth={2} />
          </div>
          <h3 className="info-titulo">6 cuotas sin interés</h3>
          <p className="info-descripcion">con tarjetas bancarias</p>
          <Link to={"/error"} className="info-link">Más información</Link>
        </div>

        {/* Tarjeta 2 */}
        <div className="info-card">
          <div className="info-icono">
            <RefreshCw size={28} strokeWidth={2} />
          </div>
          <h3 className="info-titulo">Cambios y devoluciones</h3>
          <p className="info-descripcion">¡El primero es sin cargo!</p>
          <Link to={"/error"} className="info-link">Más información</Link>
        </div>

        {/* Tarjeta 3 */}
        <div className="info-card">
          <div className="info-icono">
            <Truck size={28} strokeWidth={2} />
          </div>
          <h3 className="info-titulo">Envío gratis desde $99.000</h3>
          <p className="info-descripcion">A todo el país</p>
          <Link to={"/error"} className="info-link">Más información</Link>
        </div>

      </div>
    </section>
  );
}