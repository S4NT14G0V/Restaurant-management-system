import React from 'react'
import '../css/mesas.css'

export default function MesaItem({id}) {
  return (
    <div className='mesa-item'>
        <img src="/images/mesa.svg" className='mesa-item-icon' alt="MesaImg"/>
        Mesa # {id}
        <div className='mesa-item-actions'>
            <button className='mesa-item-button'><img src="/images/mas.svg" alt="mas"/></button>
            <button className='mesa-item-button'><img src="/images/details.svg" alt="details"/></button>
            <button className='mesa-item-button'><img src="/images/edit.svg" alt="edit"/></button>
            <button className='mesa-item-button'><img src="/images/money.svg" alt="money"/></button>
        </div>
    </div>
  )
}
