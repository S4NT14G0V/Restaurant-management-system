import React from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import '../css/sidebarLayout.css'

const Layout = ({ children }) => {
    return (
        <div className="global-container">
            <Navbar />
            <section className="page">
                <Sidebar />
                {children}
            </section>
            <Footer />
        </div>
    );
};

export default Layout;