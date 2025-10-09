import React from 'react'
import { Button, Card } from 'react-bootstrap'
import productosDescuentos from '../helpers'

const SeccionDescuento = () => {
  return (
    <div className='d-flex justify-content-center flex-wrap gap-5'>   
      {productosDescuentos.map((producto, idx) => (
        <Card className="hover-card" key={idx} style={{ width: '18rem' }}>
          <Card.Img style={{ 
          height: '200px', 
          objectFit: 'cover',
          width: '100%'
        }} 
         variant="top" src={producto.img} />
          <Card.Body>
            <Card.Title>{producto.nombre}</Card.Title>
            <Card.Text className='d-flex justify-content-start gap-3'>
               <strong className='me-2 text-danger'>${producto.precioDescuento}</strong>
               <s>${producto.precioOriginal}</s>
            </Card.Text>
            <Card.Text>
              {producto.descripcion}
            </Card.Text>
            <Button variant="primary">Comprar</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}


export default SeccionDescuento
