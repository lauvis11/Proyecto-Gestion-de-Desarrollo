import React, { useState } from 'react';
import { Search, ShoppingBag } from 'lucide-react';
import "./Navbar.css";
import { Link } from 'react-router';
import logo from '../../assets/logo.png';
export default function Navbar() {
  const [searchFocused, setSearchFocused] = useState(false);

  const menuItems = ['Destacados', 'Hombre', 'Mujer', 'Contacto', 'Oportunidades'];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <Link to="/">
          <div className="logo-container">
            <img src={logo} className="nike-logo" alt="Logo jp calzados" />
          </div>
          </Link>

          {/* Menú Central */}
          <div className="menu-container">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to="/asd"
                className="menu-link"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Búsqueda y Carrito */}
          <div className="actions-container">
            {/* Barra de Búsqueda */}
            <div className={`search-container ${searchFocused ? 'search-focused' : ''}`}>
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Buscar"
                className="search-input"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
            </div>

            {/* Icono del Carrito */}
            <Link to="/carrito" className="cart-link" >
              <button className="cart-button">
                <ShoppingBag className="cart-icon" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}


