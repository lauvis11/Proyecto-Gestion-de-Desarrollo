import React from "react";
import "./Error.css";
import { Link } from "react-router";

export default function Error() {
  return (
    <div className="error-container">
      <h1 className="error-title">404</h1>
      <p className="error-message">Página no encontrada</p>
      <Link to="/" className="error-link">
        Volver al inicio
      </Link>
    </div>
  );
}
