import React, { useState } from "react";
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
import ProtectedRoute from "./ProtectedRoute";
import '../css/styles.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <LayoutHome><Home /></LayoutHome>
            </ProtectedRoute>
          }
        />
        <Route
          path="/mesas"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Layout><Mesas /></Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/pedidos"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Layout><Pedidos /></Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/inventario"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Layout><Inventario /></Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/empleados"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Layout><Empleados /></Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/facturacion"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Layout><Facturacion /></Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/proveedores"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Layout><Proveedores /></Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/reservaciones"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Layout><Reservaciones /></Layout>
            </ProtectedRoute>
          }
        />
        <Route path="*" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Layout><NotFound/></Layout>
        </ProtectedRoute>
          } />
      </Routes>
    </Router>
  );
}

export default App;
