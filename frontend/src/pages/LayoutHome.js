import React, { useRef } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import '../css/menuLayout.css'

const LayoutHome = ({ children }) => {
    const footerRef = useRef(null);
    return (
        <div className="global-container-menu">
            <Navbar />
            {children}
            <Footer ref={footerRef} />
        </div> 
    );
};

export default LayoutHome;