import React from "react";
import Error from './components/pages/Error'
import { Inicio } from "./components/pages/Inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";



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
      <Footer />
    </BrowserRouter>
  )
}


