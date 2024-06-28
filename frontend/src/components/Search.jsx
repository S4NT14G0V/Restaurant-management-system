import React from 'react';
import '../css/search.css';

export default function Search({title}) {
    return (
        <div className="search-container">
            <input type="text" className='search-input' placeholder={`Buscar ${title}`}/>
            <button className='search-button' title='Botón de Buscar'>
                <img src="/images/search.svg" alt="Buscar" />
                Buscar
            </button>
        </div>
    )
}
