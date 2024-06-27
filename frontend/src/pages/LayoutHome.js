import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import '../css/menuLayout.css'

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