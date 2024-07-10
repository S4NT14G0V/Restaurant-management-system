import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/navbar.css';

export default function Navbar() {

  let navigate = useNavigate();

  return (

    <header className="navbar">
      <div className="navbar-container">
        <section className="navbar-companyinfo">
          <img src="/images/logo.svg" alt="logo" className="navbar-companyinfo-logo" />
          <h1>El Palacio del Vandolero</h1>
        </section>
        <section className="navbar-userinfo">
          <div className="navbar-userinfo-details">
            <h2>Argenis Medina Morales</h2>
            <h3>Administrador</h3>
          </div>
          <button className="navbar-userinfo-logout" title="Botón para Cerrar Sesión" onClick={() => navigate(`/home`)}>
            <img src="/images/salir.svg" alt="btn-salir" className="logout-icon" />
          </button>
        </section>
      </div>
    </header>

  )
}
