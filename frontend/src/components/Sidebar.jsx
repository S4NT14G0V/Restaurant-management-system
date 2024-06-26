import React from 'react';
import SidebarItem from './SidebarItem';

export default function Sidebar({ actual }) {
    const items = [
        { id: "home", imageUrl: "/images/home.svg", title: "home" },
        { id: "mesas", imageUrl: "/images/mesa.svg", title: "mesas" },
        { id: "pedidos", imageUrl: "/images/pedido.svg", title: "pedidos" },
        { id: "reservaciones", imageUrl: "/images/reservacion.svg", title: "reservaciones" },
        { id: "facturacion", imageUrl: "/images/factura.svg", title: "facturacion" },
        { id: "inventario", imageUrl: "/images/inventario.svg", title: "inventario" },
        { id: "empleados", imageUrl: "/images/empleado.svg", title: "empleados" },
        { id: "proveedores", imageUrl: "/images/proveedor.svg", title: "proveedores" },
        { id: "ajustes", imageUrl: "/images/ajuste.svg", title: "ajustes" }
    ];

    return (
        <main className="sidebar">
            {items.map(item => (
                <SidebarItem
                    key={item.id}
                    id={item.id}
                    imageUrl={item.imageUrl}
                    title={item.title}
                    isActive={item.id !== actual}
                />
            ))}
        </main>
    );
}
