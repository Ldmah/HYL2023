
import React, { useState } from 'react';


function Navbar() {
    const [collapsed, setCollapsed] = useState(true);  // State to keep track of collapsed state

    const toggleNavbar = () => {
        setCollapsed(!collapsed);  // Toggle collapsed state
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top custom-nav" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand fw-bold" href="#">Team Nori Elite - HYL 2023</a>
               
                <button className="navbar-toggler" type="button" onClick={toggleNavbar} aria-expanded={!collapsed} aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${collapsed ? '' : 'show'}`} id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto navbar-collapse-custom">
                        <a className="nav-link active me-3" aria-current="page" href="#about">About Us</a>
                        <a className="nav-link me-3" href="#experience">Our Mission</a>
                        <a className="nav-link me-3" href="#skills">Survey</a>
                        
                    </div>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;