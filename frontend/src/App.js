import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Mesas from "./Mesas";
import Home from "./Home";
import NotFound from "./NotFound";
import Inicio from "./Inicio";
import Navbar from "./componentes/Navbar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mesas" element={<Mesas />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
export default App;
