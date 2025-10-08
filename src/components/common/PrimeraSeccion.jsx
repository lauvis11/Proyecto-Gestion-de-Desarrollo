import "./PrimeraSeccion.css"
import { Link } from 'react-router-dom';

export const PrimeraSeccion = () => {
  return (
    <section class="seccion-uno">
  <h2 class="titulo">¿PARA QUIÉN ESTÁS COMPRANDO?</h2>
  
  <div class="categorias-container">
    
    <div class="categoria-card">
      <Link rel="stylesheet" to="/*">
        <div class="imagen-circulo">
          <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_400,w_400/mujer_asset_d_0d77cee49c.jpg" alt="Mujer"/>
        </div>
        <p class="categoria-texto">MUJER</p>
      </Link>
    </div>

    <div class="categoria-card">
      <Link rel="stylesheet" to="/*">
        <div class="imagen-circulo">
          <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_400,w_400/hombre_asset_d_7bb656194a.jpg" alt="Hombre"/>
        </div>
        <p class="categoria-texto">HOMBRE</p>
      </Link>
    </div>

    <div class="categoria-card">
      <Link rel="stylesheet" to="/*">
        <div class="imagen-circulo">
          <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_400,w_400/nina_asset_d_90cd005d28.jpg" alt="Niña"/>
        </div>
        <p class="categoria-texto">NIÑA</p>
      </Link>
    </div>

    <div class="categoria-card">
      <Link rel="stylesheet" to="/*">
        <div class="imagen-circulo">
          <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_400,w_400/nino_asset_d_eea9acd5bf.jpg" alt="Niño"/>
        </div>
        <p class="categoria-texto">NIÑO</p>
      </Link>
    </div>

    <div class="categoria-card seleccionada">
      <Link rel="stylesheet" to="/*">
        <div class="imagen-circulo">
          <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_400,w_400/adolescentes_d_96337a4059.jpg" alt="Adolescentes"/>
        </div>
        <p class="categoria-texto">ADOLESCENTES</p>
      </Link>
    </div>

    <div class="categoria-card">
      <Link rel="stylesheet" to="/*">
        <div class="imagen-circulo">
          <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_400,w_400/ver_todo_d_13f23273ac.jpg" alt="Ver todo"/>
        </div>
        <p class="categoria-texto">VER TODO</p>
      </Link>
    </div>

  </div>
</section>
  )
}