import React from 'react';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
    const smoothScrollTo = (targetId) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="./images/kanyi.jpg" alt="Profile" />
            </div>
            <ul className="navbar-links">
                <li><button color='black' onClick={() => smoothScrollTo('about')}>About</button></li>
                <li><a href="#specialties">Specialties</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;