import "../css/styles.css";
import React from 'react';
import '../css/styles.css';

function Productos() {
  return (
    <div className="proveedores-container">
      <div className="content-container-action-mesa">
        <button className="content-action-button" /*onClick={ toggleModal } */ >
          <img src="/images/mas_white.svg" alt="mas"/>
          Agregar Proveedor
        </button>
      </div>

      {/* error ? (
        <div>{error}</div>
      ) : (
        {<DynamicTable columns={data.columns} rows={data.rows} />
        }
      )*/}

      {//<AddProviderModal open={showModal} handleClose={toggleModal} createProvider={createProvider}/>
      }
    </div>
  );
}

export default Productos;
