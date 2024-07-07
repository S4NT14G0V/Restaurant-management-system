import React, { useEffect, useState } from 'react';
import DynamicTable from '../components/DynamicTable';
import AddProviderModal from '../components/AddProviderModal'; // Importa el componente de modal de creación
import { apiUrls } from './ApiUrls';

function Proveedores() {

  const [data, setData] = useState({ columns: [], rows: [] });
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal

  useEffect(() => {
    fetchProviders();
  }, []);

  const fetchProviders = () => {
    fetch(apiUrls.provider.all, {
      cache: 'no-cache'
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(providersData => {
        const formattedData = {
          columns: [
            { id: 'id', label: 'ID del Proveedor', align: 'center' },
            { id: 'name', label: 'Nombre', align: 'center' },
            { id: 'phoneNumber', label: 'Teléfono', align: 'center' },
            { id: 'address', label: 'Dirección', align: 'center' },
          ],
          rows: providersData.map(provider => ({
            id: provider.id,
            name: provider.name,
            phoneNumber: provider.phoneNumber,
            address: provider.address,
          })),
        };
        setData(formattedData);
      })
      .catch(error => {
        console.error("No se pudo obtener los datos de los proveedores.", error);
        setError("No se pudo obtener los datos de los proveedores.");
      });
  };
  const createProvider = async (providerData) => {
    try {
      const response = await fetch(apiUrls.provider.create, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(providerData)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      fetchProviders();

    } catch (error) {
      console.error('Error:', error);
    }
  };

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <div className="content-container">
      <div className="content-container-action-mesa">
        <button className="content-action-button" onClick={toggleModal}>
          <img src="/images/mas_white.svg" alt="mas"/>
          Agregar Proveedor
        </button>
      </div>

      {error ? (
        <div>{error}</div>
      ) : (
        <div className='content-container-table'>
          <DynamicTable columns={data.columns} rows={data.rows} />
        </div>
      )}

      <AddProviderModal open={showModal} handleClose={toggleModal} createProvider={createProvider}/>
    </div>
  );
}

export default Proveedores;
