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
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


function App() {
  return (
    <Router>
      <div className="global-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/mesas" element={<Mesas />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/inventario" element={<Inventario/>} />
          <Route path="/empleados" element={<Empleados />} />
          <Route path="/facturacion" element={<Facturacion />} />
          <Route path="/proveedores" element={<Proveedores />} />
          <Route path="/reservaciones" element={<Reservaciones/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
