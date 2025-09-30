import React from 'react'
import Navbar from './components/NavBar'


export const App = () => {
  return (
    <>
      <div className="App">
      <Navbar />
      
      <main style={{ padding: '24px' }}>
        <h1>Bienvenido a mi sitio</h1>
        <p>Contenido de tu página...</p>
      </main>
    </div>
    </>
  )
}
