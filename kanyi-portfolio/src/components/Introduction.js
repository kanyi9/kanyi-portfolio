import React from 'react';
import './Introduction.css';

const Introduction = () => {
    return (
        <section className="introduction">
            <div className="introduction-content">
                <h1>Peter Kanyi</h1>
                <h2>Full stack developer</h2>
                <p>I'm [Peter Kanyi], a [Your Profession] with [Your Experience] years of experience.</p>
                <p>This portfolio showcases my skills, projects, and experiences.</p>
            </div>
            <div className="introduction-image">
                <img src="./images/kanyi.jpg" alt="Your Name" />
            </div>
        </section>
    );
};

export default Introduction;