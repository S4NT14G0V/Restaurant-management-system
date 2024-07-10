// Layout.js
import React, { useRef } from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Divider from '../components/Divider';
import useVisibility from '../hooks/useVisibility';
import '../css/sidebarLayout.css';

const Layout = ({ children, title }) => {
  const footerRef = useRef(null);
  const isFooterVisible = useVisibility(footerRef);

  return (
    <section className="global-container">
      <Navbar />
      <Sidebar isFooterVisible={isFooterVisible} />
      <main className="main-container-a">
        <Search title={title} />
        <Divider />
        {children}
      </main>
      <Footer ref={footerRef} />
    </section>
  );
};

export default Layout;
