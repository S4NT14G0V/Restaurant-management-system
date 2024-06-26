import "../css/sidebar.css";
import Sidebar from "../components/Sidebar"
import React from 'react';
import Menu from "../components/Menu";

function Mesas() {
  return (
    <section className="page">
      <aside><Sidebar actual="mesas"/></aside>
      <main className="main-container-a"><h1>Mesas</h1></main>
    </section>
  );
}

export default Mesas;
