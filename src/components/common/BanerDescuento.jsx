import React from 'react';
import './BanerDescuento.css';
import { Link } from 'react-router-dom';

const BanerDescuento = () => {
  return (
    <section className="baner-descuento">
      <div className="baner-contenido">
        <h2>Recibí 15% OFF en tu primera compra</h2>
        <p>Suscribite a nuestro Newsletter y recibí beneficios exclusivos.</p>
        <form className="formulario">
          <input type="email" placeholder="Ingresá tu e-mail" />
          <input type="text" placeholder="Ingresá tu nombre" />
          <Link to="/Error">
          <button type="submit">Enviar</button>
          </Link>
        </form>
      </div>
    </section>
  );
};

export default BanerDescuento;
