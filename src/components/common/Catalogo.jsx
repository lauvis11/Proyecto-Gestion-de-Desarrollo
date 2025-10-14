import "./Catalogo.css"
import { Link } from "react-router-dom"
export default function Catalogo() {
  return (
    <section className="banners-section">
      <div className="banners-grid">
        
        {/* Banner 1 */}
        <div className="banner banner-1">
          <div className="banner-content">
            <h3 className="banner-titulo">Nike Running</h3>
            <p className="banner-subtitulo">Nueva Temporada</p>
            <Link to="/error">
                <button className="banner-boton">Comprar</button>
            </Link>
          </div>
        </div>

        {/* Banner 2 */}
        <div className="banner banner-2">
          <div className="banner-content">
            <h3 className="banner-titulo">Nike Moda</h3>
            <p className="banner-subtitulo">Los mejores estilos para vos</p>
            <Link to="/error">
                <button className="banner-boton">Comprar</button>
            </Link>
          </div>
        </div>

        {/* Banner 3 */}
        <div className="banner banner-3">
          <div className="banner-content">
            <h3 className="banner-titulo">Nike Free Metcon</h3>
            <p className="banner-subtitulo">Calzado para todo entrenamiento</p>
            <Link to="/error">
                <button className="banner-boton">Comprar</button>
            </Link>
          </div>
        </div>

        {/* Banner 4 */}
        <div className="banner banner-4">
          <div className="banner-content">
            <h3 className="banner-titulo">Membresía</h3>
            <p className="banner-subtitulo">Envío gratis exclusivo para miembros</p>
            <Link to="/error">
                <button className="banner-boton">Ver mas</button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}