import { PrimeraSeccion } from '../common/Primeraseccion'
import SeccionDescuento from '../SeccionDescuento'
import Catalogo from '../common/Catalogo'
import FormasDePago from '../common/FormasDePago'
import './Inicio.css'

export const Inicio = () => {
  return (
    <div>
      <PrimeraSeccion/>
      <Catalogo/>
      <SeccionDescuento/>
      <FormasDePago/>
    </div>
  )
}


