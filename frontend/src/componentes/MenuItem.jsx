import React from 'react';
import { useNavigate } from 'react-router-dom';

const MenuItem = ({ imageUrl, title, id }) => {
  const navigate = useNavigate();

  const handleItemClick = () => {
    const normalizedTitle = id.toLowerCase().replace(/\s+/g, '-'); // Normaliza el título a minúsculas y reemplaza espacios por guiones
    navigate(`/${normalizedTitle}`);
  };

  return (
    <div className="container-item">
      <button title={`Botón de ${title}`} onClick={handleItemClick}>
        <img src={imageUrl} alt={title} className="container-item-icon" />
        {title}
      </button>
    </div>
  );
};

export default MenuItem;



