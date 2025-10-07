import "./PrimeraSeccion.css"

export const PrimeraSeccion = () => {
  return (
    <section class="seccion-uno">
  <h2 class="titulo">¿PARA QUIÉN ESTÁS COMPRANDO?</h2>
  
  <div class="categorias-container">
    
    <div class="categoria-card">
      <div class="imagen-circulo">
        <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_400,w_400/mujer_asset_d_0d77cee49c.jpg" alt="Mujer"/>
      </div>
      <p class="categoria-texto">MUJER</p>
    </div>

    <div class="categoria-card">
      <div class="imagen-circulo">
        <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_300,w_300/hombre_asset_t_021b78946b.jpg" alt="Hombre"/>
      </div>
      <p class="categoria-texto">HOMBRE</p>
    </div>

    <div class="categoria-card">
      <div class="imagen-circulo">
        <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_300,w_300/nina_asset_t_1d521d8888.jpg" alt="Niña"/>
      </div>
      <p class="categoria-texto">NIÑA</p>
    </div>

    <div class="categoria-card">
      <div class="imagen-circulo">
        <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_300,w_300/nino_asset_t_80b5f53e7b.jpg" alt="Niño"/>
      </div>
      <p class="categoria-texto">NIÑO</p>
    </div>

    <div class="categoria-card seleccionada">
      <div class="imagen-circulo">
        <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_300,w_300/adolescentes_t_d30266816b.jpg" alt="Adolescentes"/>
      </div>
      <p class="categoria-texto">ADOLESCENTES</p>
    </div>

    <div class="categoria-card">
      <div class="imagen-circulo">
        <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_300,w_300/ver_todo_t_e46e4d00d8.jpg" alt="Ver todo"/>
      </div>
      <p class="categoria-texto">VER TODO</p>
    </div>

  </div>
</section>
  )
}
