import React from "react";
import "./Carrito.css";

export const Carrito = () => {
  return (
    <div className="carrito-container">

      <div className="carrito-contenido">
        <h3>TU CARRITO</h3>
        <p>Aquí se mostrarán tus productos seleccionados.</p>

        <div className="productos-ejemplo">
          <div className="producto-card">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.5DhAueojGgVDdwBzgwGcMQHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Zapatilla 1"
              className="producto-img"
            />
            <div className="producto-info">
              <h4>Timbarland</h4>
              <p>$250.000</p>
            </div>
            <button className="boton-eliminar">×</button>
          </div>

          <div className="producto-card">
            <img
              src="https://th.bing.com/th/id/R.5827fc518ca4cc307bd081fde820c337?rik=KTiO%2bgzHvvzopg&pid=ImgRaw&r=0"
              alt="Zapatilla 2"
              className="producto-img"
            />
            <div className="producto-info">
              <h4>Vans knu school</h4>
              <p>$120.500</p>
            </div>
            <button className="boton-eliminar">×</button>
          </div>
        </div>
      </div>
    </div>
  );
};
