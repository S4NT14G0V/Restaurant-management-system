import React from 'react';
import Table from "../components/Table";

function Pedidos() {
  const handleAddMesa = () => {
    // Aquí puedes agregar la lógica para agregar una mesa
    alert('Agregar Pedido button clicked!');
  };

  return (
    <div className="content-container">
      <div className="content-container-action-mesa">
        <button className="content-action-button" onClick={handleAddMesa}>
          <img src="/images/mas_white.svg" alt="mas" />
          Agregar Pedido
        </button>
      </div>
      <div className='content-container-table'>
        <Table />
      </div>
    </div>
  );
}

export default Pedidos;
