import React from "react";
import "./Error.css";

export default function Error() {
  return (
    <div className="error-container">
      <h1 className="error-title">404</h1>
      <p className="error-message">Página no encontrada</p>
      <a href="App.jsx" className="error-link">
        Volver al inicio
      </a>
    </div>
  );
}
