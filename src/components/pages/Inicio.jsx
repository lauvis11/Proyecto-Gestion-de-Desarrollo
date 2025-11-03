import { PrimeraSeccion } from '../common/PrimeraSeccion'
import SeccionDescuento from '../SeccionDescuento'
import Catalogo from '../common/Catalogo'
import FormasDePago from '../common/FormasDePago'
import './Inicio.css'
import BanerDescuento from '../common/BanerDescuento'


export const Inicio = () => {
  return (
    <div>
      <PrimeraSeccion/>
      <Catalogo/>
      <SeccionDescuento/>
      <FormasDePago/>
      <BanerDescuento/>
    </div>
  )
}


