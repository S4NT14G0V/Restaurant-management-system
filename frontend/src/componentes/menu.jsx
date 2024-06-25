import React from 'react'
import Menu_item from "./menu_item"
export default function menu() {
  return (
    <main className="container">
      <Menu_item
        imageUrl="/images/mesa.svg"
        title="mesas"
      />
      <Menu_item
        imageUrl="/images/pedido.svg"
        title="pedidos"
      />
      <Menu_item
        imageUrl="/images/reservacion.svg"
        title="reservaciones"
      />
      <Menu_item
        imageUrl="/images/factura.svg"
        title="facturacion"
      />
      <Menu_item
        imageUrl="/images/inventario.svg"
        title="inventario"
      />
      <Menu_item
        imageUrl="/images/empleado.svg"
        title="empleados"
      />
      <Menu_item
        imageUrl="/images/proveedor.svg"
        title="proveedores"
      />
      <Menu_item
        imageUrl="/images/ajuste.svg"
        title="ajustes"
      />
      
      </main>
  )
}
