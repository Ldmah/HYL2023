import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';


function Navbar() {
    const [collapsed, setCollapsed] = useState(true);  // State to keep track of collapsed state

    const toggleNavbar = () => {
        setCollapsed(!collapsed);  // Toggle collapsed state
    }

    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top custom-nav" data-bs-theme="dark">
            <div className="container-fluid">
                {/* <a className="navbar-brand fw-bold" href="#">Team Nori Elite - HYL 2023</a> */}

                <a className="navbar-brand fw-bold" href="#">The EcoHelp Initiative</a>
               
                <button className="navbar-toggler" type="button" onClick={toggleNavbar} aria-expanded={!collapsed} aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${collapsed ? '' : 'show'}`} id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto navbar-collapse-custom">
                        <a className="nav-link active me-3" aria-current="page" href="/About.js">About Us</a>
                        <a className="nav-link me-3" href="Recycle.js">Disposal Help</a>
                        <a className="nav-link me-3" href="/Survey.js">Survey</a>
                    </div>
                </div>
            </div>
        </nav>
        <div className='outlet'>
            <Outlet />
         </div>   
        </>
    )
}


export default Navbar;