import React from 'react';
import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <main className="container">
      <MenuItem id="mesas" imageUrl="/images/mesa.svg" title="mesas" />
      <MenuItem id="pedidos" imageUrl="/images/pedido.svg" title="pedidos" />
      <MenuItem id="reservaciones" imageUrl="/images/reservacion.svg" title="reservaciones" />
      <MenuItem id="facturacion" imageUrl="/images/factura.svg" title="facturación" />
      <MenuItem id="inventario" imageUrl="/images/inventario.svg" title="inventario" />
      <MenuItem id="empleados" imageUrl="/images/empleado.svg" title="empleados" />
      <MenuItem id="proveedores" imageUrl="/images/proveedor.svg" title="proveedores" />
      <MenuItem id="ajustes" imageUrl="/images/ajuste.svg" title="ajustes" />
    </main>
  )
}
