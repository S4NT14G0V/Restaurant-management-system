import React, { useState, useRef, useEffect } from 'react';
import MesaItem from "./MesaItem";
import {apiUrls} from "../pages/ApiUrls"
import '../css/mesas.css';

export default function Mesas() {
  const [mesas, setMesas] = useState([
    { id: 1, price: "123", capacity: 5, stateItem: 0 },
    { id: 2, price: "123", capacity: 5, stateItem: 0 },
    { id: 3, price: "123", capacity: 5, stateItem: 1 },
    { id: 4, price: "123", capacity: 5, stateItem: 2 },
    { id: 5, price: "123", capacity: 5, stateItem: 0 },
    { id: 6, price: "123", capacity: 5, stateItem: 1 },
    { id: 7, price: "123", capacity: 5, stateItem: 2 },
    { id: 8, price: "123", capacity: 5, stateItem: 1 },
    { id: 9, price: "123", capacity: 5, stateItem: 2 },
  ]);

  const dragMesa = useRef(null);
  const [dragOverMesa, setDragOverMesa] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleSort = () => {
    const mesasClone = [...mesas];
    const temp = mesasClone[dragMesa.current];
    mesasClone[dragMesa.current] = mesasClone[dragOverMesa];
    mesasClone[dragOverMesa] = temp;
    setMesas(mesasClone);
    dragMesa.current = null;
    setDragOverMesa(null);
  };

  const handleDragStart = (index) => {
    dragMesa.current = index;
    setIsDragging(true);
  };

  const handleDragEnter = (index) => {
    setDragOverMesa(index);
  };

  const handleDragEnd = () => {
    handleSort();
    setIsDragging(false);
  };

  const fetchMesas = async () => {
    try {
      const response = await fetch(apiUrls.table.all); 
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setMesas(data);
    } catch (error) {
      console.error('Error fetching mesas:', error);
    }
  }

  useEffect(() => {
    fetchMesas();
  }, []);

  return (
    <div className="mesas-menu">
      {mesas.map((mesa, index) => (
        <MesaItem
          key={mesa.id}
          id={mesa.id}
          price={mesa.price}
          capacity={mesa.capacity}
          stateItem={mesa.stateItem}
          dragStart={() => handleDragStart(index)}
          dragEnter={() => handleDragEnter(index)}
          dragEnd={handleDragEnd}
          dragOver={(e) => e.preventDefault()}
          isDragging={isDragging}
          dragOverMesa={dragOverMesa}
          index={index}
        />
      ))}
    </div>
  );
}
