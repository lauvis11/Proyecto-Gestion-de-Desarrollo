import React from "react";
import "./Footer.css";
import { Facebook, Instagram, Twitter } from "lucide-react"; // O usa tus propios íconos
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo y descripción */}
        <div className="footer-section">
          <h2 className="footer-logo">SneakerShop</h2>
          <p className="footer-text">
            La mejor tienda online de zapatillas urbanas y deportivas.  
            Calidad, estilo y comodidad en un solo lugar.
          </p>
        </div>

        {/* Enlaces de navegación */}
        <div className="footer-section">
          <h3 className="footer-title">Enlaces</h3>
          <ul className="footer-links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/zapatillas">Zapatillas</Link></li>
            <li><Link to="/ofertas">Ofertas</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>

        {/* Soporte */}
        <div className="footer-section">
          <h3 className="footer-title">Soporte</h3>
          <ul className="footer-links">
            <li><Link to="/faq">Preguntas frecuentes</Link></li>
            <li><Link to="/envios">Envíos</Link></li>
            <li><Link to="/cambios">Cambios y devoluciones</Link></li>
            <li><Link to="/politica">Política de privacidad</Link></li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div className="footer-section">
          <h3 className="footer-title">Síguenos</h3>
          <div className="footer-socials">
            <Link to="#"><Facebook /></Link>
            <Link to="#"><Instagram /></Link>
            <Link to="#"><Twitter /></Link>
          </div>
        </div>
      </div>

      {/* Línea final */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} SneakerShop. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
