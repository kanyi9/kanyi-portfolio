import React from 'react';
import './About.css'; // Import the CSS file for styling

const AboutMe = () => {
    const smoothScrollTo = (targetId) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <section id='about' className="about-container">
            <h2>About Me</h2>
            <p>
                Hello! I'm [Your Name], a passionate web developer with a love for creating beautiful and functional web applications. 
                I enjoy working with modern technologies and continuously learning new skills to improve my craft.
            </p>
            <p>
                In my free time, I love exploring new places, reading books, and contributing to open-source projects. 
                I'm always looking for new challenges and opportunities to grow as a developer.
            </p>
        </section>
    );
};

export default AboutMe;