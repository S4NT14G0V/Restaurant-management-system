import React from 'react';

const MenuItem = ({ imageUrl, title }) => {
  return (
    <div className="container-item">
      <button title={`Botón de ${title}`}>
        <img src={imageUrl} alt="ajustes" className="container-item-icon" />
        {title}
      </button>
    </div>
  );
};

export default MenuItem;



