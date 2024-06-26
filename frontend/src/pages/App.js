import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Mesas from "./Mesas";
import Home from "./Home";
import Inventario from "./Inventario";
import Pedidos from "./Pedidos";
import NotFound from "./NotFound";
import Login from "./Login";
import Empleados from "./Empleados";
import Facturacion from "./Facturacion";
import Reservaciones from "./Reservaciones";
import Proveedores from "./Proveedores";
import Layout from "./Layout";
import LayoutHome from "./LayoutHome";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<LayoutHome><Home /></LayoutHome>} />
        <Route path="/mesas" element={<Layout><Mesas /></Layout>} />
        <Route path="/pedidos" element={<Layout><Pedidos /></Layout>} />
        <Route path="/inventario" element={<Layout><Inventario /></Layout>} />
        <Route path="/empleados" element={<Layout><Empleados /></Layout>} />
        <Route path="/facturacion" element={<Layout><Facturacion /></Layout>} />
        <Route path="/proveedores" element={<Layout><Proveedores /></Layout>} />
        <Route path="/reservaciones" element={<Layout><Reservaciones /></Layout>} />
        <Route path="*" element={<Layout><NotFound /></Layout>} />
      </Routes>
    </Router>
  );
}
export default App;
