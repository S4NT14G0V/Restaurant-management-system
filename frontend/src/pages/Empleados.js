import "../css/sidebar.css";
import React from 'react';
import { useEffect, useState } from 'react';
import DynamicTable from '../components/DynamicTable';

function Empleados() {

  const [data, setData] = useState({ columns: [], rows: [] });

  useEffect(() => {
    // Datos falsos para empleados
    const fakeData = {
      columns: [
        { id: 'id', label: 'ID del Empleado', align: 'center' },
        { id: 'name', label: 'Nombre', align: 'center' },
        { id: 'position', label: 'Posición', align: 'center' },
        { id: 'department', label: 'Departamento', align: 'center' },
        { id: 'salary', label: 'Salario', align: 'center' },
      ],
      rows: [
        { id: 1, name: 'John Doe', position: 'Software Engineer', department: 'Engineering', salary: '$100,000' },
        { id: 2, name: 'Jane Smith', position: 'Project Manager', department: 'Management', salary: '$90,000' },
        { id: 3, name: 'Sam Johnson', position: 'Product Designer', department: 'Design', salary: '$85,000' },
        { id: 4, name: 'Chris Lee', position: 'Data Analyst', department: 'Analytics', salary: '$75,000' },
        { id: 5, name: 'Alex Brown', position: 'DevOps Engineer', department: 'Operations', salary: '$95,000' },
      ]
    };

    // Configurar los datos falsos en el estado
    setData(fakeData);
  }, []);



  return (
    <div className="content-container">
      <div className='content-container-table'>
        <DynamicTable columns={data.columns} rows={data.rows} />
        </div>
      </div>
      );
}

      export default Empleados;
