import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import SidebarItem from './SidebarItem';
import '../css/sidebar.css';

export default function Sidebar({ isFooterVisible }) {
  const location = useLocation();
  const [sidebarActive, setSidebarActive] = useState(true);

  const items = [
    { id: "home", imageUrl: "/images/home.svg", title: "inicio" },
    { id: "mesas", imageUrl: "/images/mesa.svg", title: "mesas" },
    { id: "pedidos", imageUrl: "/images/pedido.svg", title: "pedidos" },
    { id: "reservaciones", imageUrl: "/images/reservacion.svg", title: "reservaciones" },
    { id: "facturacion", imageUrl: "/images/factura.svg", title: "facturación" },
    { id: "inventario", imageUrl: "/images/inventario.svg", title: "inventario" },
    { id: "empleados", imageUrl: "/images/empleado.svg", title: "empleados" },
    { id: "proveedores", imageUrl: "/images/proveedor.svg", title: "proveedores" },
    { id: "productos", imageUrl: "/images/producto.svg", title: "productos" }
  ];

  return (
    <aside className={`sidebar sidebar-width-${sidebarActive ? 'active' : 'disabled'}`}>
      <div className={`sidebar-container sidebar-${sidebarActive ? 'active' : 'disabled'} sidebar-height-${isFooterVisible ? 'active' : 'disabled'}`}>
        {items.map(item => (
          <SidebarItem
            key={item.id}
            id={item.id}
            imageUrl={item.imageUrl}
            title={item.title}
            isActive={location.pathname !== `/${item.id}`}
            hasText={sidebarActive}
          />
        ))}
        <button className='sidebar-action' onClick={() => setSidebarActive(!sidebarActive)}>
          {sidebarActive ? <img src="/images/arrow_back.svg" alt="Ocultar" className={`sidebar-img-active`} /> : <img src="/images/arrow_forward.svg" alt="Mostrar" />}
        </button>
      </div>
    </aside>
  );
}
