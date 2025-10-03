import React, { useState } from 'react';
import { Search, ShoppingBag } from 'lucide-react';
import "./Navbar.css";
import { Link } from 'react-router';

export default function Navbar() {
  const [searchFocused, setSearchFocused] = useState(false);

  const menuItems = ['Destacados', 'Hombre', 'Mujer', 'Contacto', 'Oportunidades'];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo Nike */}
          <div className="logo-container">
            <svg className="nike-logo" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 7.8L6.442 15.276c-1.456.616-2.679.925-3.668.925-1.12 0-1.933-.392-2.437-1.177-.317-.504-.41-1.143-.28-1.918.13-.775.476-1.6 1.036-2.478.467-.71 1.111-1.4 1.932-2.071.821-.672 1.742-1.267 2.766-1.785C6.815 6.116 7.925 5.67 9.11 5.31c1.184-.364 2.42-.546 3.71-.546.747 0 1.43.093 2.054.28a3.99 3.99 0 011.456.747c.392.317.7.7.925 1.15.224.448.336.925.336 1.428 0 .373-.056.756-.168 1.15l-.392 1.316c-.168.56-.252.98-.252 1.26 0 .28.084.504.252.672.168.168.42.252.756.252.28 0 .616-.084 1.008-.252.392-.168.849-.42 1.372-.756L24 7.8z"/>
            </svg>
          </div>

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
            <button className="cart-button">
              <ShoppingBag className="cart-icon" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}


