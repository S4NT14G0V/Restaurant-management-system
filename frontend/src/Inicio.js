import "./css/styles.css"
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';
import React from 'react';

function Mesas() {
  return (
    <div className="main-container">
      <Navbar/>
      <div className="container-unavailable">Página de Inicio</div>
      <Footer/>
    </div>
    
  );
}

export default Mesas;
