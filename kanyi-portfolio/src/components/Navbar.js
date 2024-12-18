import React from 'react';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="./images/kanyi.jpg" alt="Profile" />
            </div>
            <ul className="navbar-links">
                <li><a href="#about">About</a></li>
                <li><a href="#specialties">Specialties</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;