import "../css/sidebar.css";
import Sidebar from "../components/Sidebar"
import React from 'react';

function Mesas() {
  return (
    <section className="page">
      <Sidebar />
      <main className="main-container-a"><h1>Empleados</h1></main>
    </section>
  );
}

export default Mesas;
