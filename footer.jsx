import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo y descripción */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">SneakerShop</h2>
          <p className="text-sm text-gray-400">
            La mejor tienda online de zapatillas urbanas y deportivas.  
            Calidad, estilo y comodidad en un solo lugar.
          </p>
        </div>

        {/* Enlaces de navegación */}
        <div>
          <h3 className="text-white font-semibold mb-3">Enlaces</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Inicio</a></li>
            <li><a href="/zapatillas" className="hover:text-white">Zapatillas</a></li>
            <li><a href="/ofertas" className="hover:text-white">Ofertas</a></li>
            <li><a href="/contacto" className="hover:text-white">Contacto</a></li>
          </ul>
        </div>

        {/* Soporte */}
        <div>
          <h3 className="text-white font-semibold mb-3">Soporte</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/faq" className="hover:text-white">Preguntas frecuentes</a></li>
            <li><a href="/envios" className="hover:text-white">Envíos</a></li>
            <li><a href="/cambios" className="hover:text-white">Cambios y devoluciones</a></li>
            <li><a href="/politica" className="hover:text-white">Política de privacidad</a></li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h3 className="text-white font-semibold mb-3">Síguenos</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white"><Facebook /></a>
            <a href="#" className="hover:text-white"><Instagram /></a>
            <a href="#" className="hover:text-white"><Twitter /></a>
          </div>
        </div>
      </div>

      {/* Línea final */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SneakerShop. Todos los derechos reservados.
      </div>
    </footer>
  );
}