import "./PrimeraSeccion.css"

export const PrimeraSeccion = () => {
  return (
    <section class="seccion-uno">
  <h2 class="titulo">¿PARA QUIÉN ESTÁS COMPRANDO?</h2>
  
  <div class="categorias-container">
    
    <div class="categoria-card">
      <div class="imagen-circulo">
        <img src="mujer.jpg" alt="Mujer"/>
      </div>
      <p class="categoria-texto">MUJER</p>
    </div>

    <div class="categoria-card">
      <div class="imagen-circulo">
        <img src="hombre.jpg" alt="Hombre"/>
      </div>
      <p class="categoria-texto">HOMBRE</p>
    </div>

    <div class="categoria-card">
      <div class="imagen-circulo">
        <img src="nina.jpg" alt="Niña"/>
      </div>
      <p class="categoria-texto">NIÑA</p>
    </div>

    <div class="categoria-card">
      <div class="imagen-circulo">
        <img src="nino.jpg" alt="Niño"/>
      </div>
      <p class="categoria-texto">NIÑO</p>
    </div>

    <div class="categoria-card seleccionada">
      <div class="imagen-circulo">
        <img src="adolescentes.jpg" alt="Adolescentes"/>
      </div>
      <p class="categoria-texto">ADOLESCENTES</p>
    </div>

    <div class="categoria-card">
      <div class="imagen-circulo">
        <img src="ver-todo.jpg" alt="Ver todo"/>
      </div>
      <p class="categoria-texto">VER TODO</p>
    </div>

  </div>
</section>
  )
}