import "../css/sidebar.css";
import React, { useState, useEffect } from 'react';
import MesasComp from "../components/Mesas";
import AddTableModal from "../components/AddTableModal";
import { apiUrls } from "./ApiUrls";

function Mesas() {
  
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
  }, []);
  
  const toggleModal = () => {
    setShowModal(prev => !prev);
  };
  
  
  const createTable = async (tableData) => {
    try {
      const response = await fetch(apiUrls.table.create, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(tableData)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="content-container-mesa">
      <div className="content-container-action-mesa">
        <button className="content-action-button" onClick={toggleModal}>
          <img src="/images/mas_white.svg" alt="mas"/>
          Agregar Mesa
        </button>
      </div>
      <MesasComp/>
      <AddTableModal open={showModal} handleClose={toggleModal} createTable={createTable} />

    </div>
  );
}

export default Mesas;

