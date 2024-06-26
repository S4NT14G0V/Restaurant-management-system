import "../css/sidebar.css";
import Sidebar from "../components/Sidebar"
import React from 'react';

function Mesas() {
  return (
    <section className="page">     
      <aside><Sidebar actual="pedidos"/></aside>
      <main className="main-container-a"><h1>Pedidos</h1></main>
    </section>
  );
}

export default Mesas;
