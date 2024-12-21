import React from 'react';
import './Projects.css'; // Import the CSS file for styling

const Projects = () => {
    return (
        <section className="projects">
            <h2>Projects</h2>
            <div className="projects-grid">
                <div className="project">
                    <div className="project-image">
                        {/* Add project image or placeholder */}
                    </div>
                    <div className="project-details">
                        <h3>Project Title</h3>
                        <p>Project Description</p>
                        <p>Gari-Zetu Auto Dealership is a full-stack web application designed to provide car enthusiasts with an easy and convenient 
shopping experience. With a user-friendly interface and seamless navigation, aspiring drivers and car owners can explore 
a wide range of cars, their specifications, an image of the car they would want to purchase.</p> 
<p>Technologies used –React in frontend – python and flask API backend</p>
                        <a href="https://gari-zetu.vercel.app/" target="_blank" rel="noopener noreferrer">Visit Project</a>
                    </div>
                </div>
                <div className="project">
                    <div className="project-image">
                        {/* Add project image or placeholder */}
                    </div>
                    <div className="project-details">
                        <h3>Project Title</h3>
                        <p>Project Description</p>
                        <p>Foodbridge is a fullstack web application that aims to bridge the gap by creating a streamlined
                            user-friendly platform that connects donors, volunteers and those in need , thereby reducing 
                            food insecurity and promoting healthier communities
                        </p>
                        <p>Technologies used are:- React, flask, SQL Alchemy, JWT, flask mail, Tailwind css</p>
                        <a href="https://foodbridge-project.vercel.app/" target="_blank" rel="noopener noreferrer">Visit Project</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;