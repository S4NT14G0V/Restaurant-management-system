import React from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Divider from '../components/Divider';
import '../css/sidebarLayout.css'

const Layout = ({ children, title }) => {
    return (
        <div className="global-container">
            <Navbar />
            <section className="page">
                <Sidebar />
                <div className="main-container-a">
                    <Search title={title}/>
                    <Divider />
                    {children}
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Layout;