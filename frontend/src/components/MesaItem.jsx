import React from 'react'
import '../css/mesas.css'

export default function MesaItem({ id, price,capacity,stateItem }) {

  const itemStates = ["Disponible","En uso","Reservada"]
  const stateItemId = stateItem

  return (
    <div className='mesa-item'>
      <header className='mesa-item-details'>
        <div className={`mesa-item-details-date mesa-item-state mesa-item-${stateItem}`}>
          <span className={`${stateItemId === 2 ? 'mesa-separator' : ''}`}>{itemStates[stateItem]}</span>
          <span className={`${stateItemId === 2 ? '' : 'mesa-item-display-none'}`}>{Math.floor(Math.random() * 24)+1}:{Math.floor(Math.random() * 60)+1}</span>
        </div>
        <div className="mesa-item-details-capacity">
          <img src="/images/people.svg" className='mesa-item-icon' alt="MesaImg" />
          {capacity}
        </div>
      </header>
      <main className='mesa-item-info'>
        <img src="/images/mesa_card.svg" className='mesa-item-icon' alt="MesaImg" />
        Mesa # {id}
        <p className='mesa-item-price'>${price}</p>
      </main>
      <hr className="mesa-divider" />
      <footer className='mesa-item-actions'>
        <button className='mesa-item-button'><img src="/images/mas.svg" alt="mas" /></button>
        <button className='mesa-item-button'><img src="/images/details.svg" alt="details" /></button>
        <button className='mesa-item-button'><img src="/images/edit.svg" alt="edit" /></button>
        <button className='mesa-item-button'><img src="/images/money.svg" alt="money" /></button>
      </footer>
    </div>
  )
}
