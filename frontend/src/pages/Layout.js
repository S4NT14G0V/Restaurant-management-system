// Layout.js
import React, { useRef } from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Divider from '../components/Divider';
import '../css/sidebarLayout.css';

const Layout = ({ children, title }) => {

  return (
    <section className="global-container">
      <Navbar />
      <Sidebar />
      <main className="main-container-a">
        <Search title={title} />
        <Divider />
        {children}
      </main>
      <Footer/>
    </section>
  );
};

export default Layout;
