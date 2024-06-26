import React from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const LayoutHome = ({ children }) => {
    return (
        <div className="global-container">
            <Navbar />
            {children}
            <Footer />
        </div> 
    );
};

export default LayoutHome;