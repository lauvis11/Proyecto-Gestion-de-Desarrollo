import React from "react";
import Navbar from './components/NavBar'
import Error from './components/error'
import { Inicio } from "./components/Inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main style={{ padding: '24px' }}>
        <Routes>
          <Route path="/" element={
            <Inicio></Inicio>
          } />
          <Route path="/*" element={
            <Error />
          } />
        </Routes>
      </main>
    </BrowserRouter>
  )
}


