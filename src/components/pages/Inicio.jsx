import { PrimeraSeccion } from '../common/Primeraseccion'
import SeccionDescuento from '../SeccionDescuento'
import Catalogo from '../common/Catalogo'
import './Inicio.css'

export const Inicio = () => {
  return (
    <div>
      <PrimeraSeccion/>
      <Catalogo/>
      <SeccionDescuento/>
  
    </div>
  )
}


