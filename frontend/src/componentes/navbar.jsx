import React from 'react'
import logo from '../images/logo.svg';
import salir from '../images/salir.svg';
export default function Navbar({title}) {
  return (
    <div>
    <header className="navbar">
      <section className="navbar-companyinfo">
        <img src={logo} alt="logo" className="navbar-companyinfo-logo" />
        <h1>El Palacio del Vandolero</h1>
      </section>
      <section className="navbar-userinfo">
        <div className="navbar-userinfo-details">
          <h2>Argenis Medina Morales</h2>
          <h3>Administrador</h3>
        </div>
        <button className="navbar-userinfo-logout" title="Botón para Cerrar Sesión">
          <img src={salir} alt="btn-salir" className="logout-icon" />
        </button>
      </section>
    </header>
  </div>
  )
}
