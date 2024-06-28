import "../css/sidebar.css";
import React from 'react';
import MesasComp from "../components/Mesas";

function Mesas() {
  const handleAddMesa = () => {
    // Aquí puedes agregar la lógica para agregar una mesa
    alert('Agregar Mesa Funcionando Correctamente!');
  };

  return (
    <div className="content-container-mesa">
      <div className="content-container-action-mesa">
        <button className="content-action-button" onClick={handleAddMesa}>
          <img src="/images/mas_white.svg" alt="mas"/>
          Agregar Mesa
        </button>
      </div>
      <MesasComp />
    </div>
  );
}

export default Mesas;

