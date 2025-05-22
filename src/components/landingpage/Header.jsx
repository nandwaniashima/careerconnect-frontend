import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'; 
import ToolTip from './ToolTip';
import {useSelector } from "react-redux";


const Header = () => {
    const navigate = useNavigate();
    const location = useLocation(); 
    
    const { user } = useSelector((store) => store.auth);
  
    
    const handleNavigate = (target) => {
        if (target === "features") {
            
            if (location.pathname === "/") {
                document.getElementById("features").scrollIntoView({ behavior: "smooth" });
            } else {
                
                navigate("/");
                setTimeout(() => {
                    document.getElementById("features").scrollIntoView({ behavior: "smooth" });
                }, 100); 
            }
        } else {
            navigate(target); 
        }
    };

    return (
        <header className="header-setting">
            <div className="logo">
                <span onClick={() => handleNavigate("/")}>CareerConnect</span>
            </div>
            <nav>
                <ul className='linkss'>
                    <li onClick={() => handleNavigate("/about")}>
                        <ToolTip text="Learn more about our vision and values.">ABOUT US</ToolTip>
                        <span className="material-icons">chevron_right</span>
                    </li>
                    <li onClick={() => handleNavigate("features")}>
                        <ToolTip text="Discover what makes us stand out.">FEATURES</ToolTip>
                        <span className="material-icons">chevron_right</span>
                    </li>
                    <li onClick={() => handleNavigate("/resume")}>
                        <ToolTip text="Craft your ideal resume">RESUME</ToolTip>
                        <span className="material-icons">chevron_right</span>
                    </li>
                    <li onClick={() => handleNavigate("/contact")}>
                        <ToolTip text="Reach out to us for any questions or support.">CONTACT US</ToolTip>
                        <span className="material-icons">chevron_right</span>
                    </li>
                </ul>
            </nav>
            <div className="header-right">
                {/* Conditionally render the "SIGN IN" link based on the login state */}
                {/* {!isLoggedIn && (
                    <Link to="/login" className="innovons-link">
                        SIGN IN<span>&#129133;</span>
                    </Link>
                {/* )} */}
                {!user ? (
                    <Link to="/login" className="innovons-link">
                        SIGN IN<span>&#129133;</span>
                    </Link>
          ) : (
            <Link to="/home" className="innovons-link">
                        <span>&#129133;</span>
                    </Link>
                  )} 
            </div>
        </header>
    );
};

export default Header;