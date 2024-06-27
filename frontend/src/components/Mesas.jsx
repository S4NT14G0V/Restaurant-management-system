import React from 'react'
import MesaItem from "./MesaItem"
import '../css/mesas.css'

export default function Mesas() {
  return (
    <div className='mesas-menu'>
      <MesaItem id="1" />
      <MesaItem id="2" />
      <MesaItem id="3" />
      <MesaItem id="4" />
      <MesaItem id="5" />
      <MesaItem id="6" />
      <MesaItem id="7" />
      <MesaItem id="8" />
    </div>
  )
}
