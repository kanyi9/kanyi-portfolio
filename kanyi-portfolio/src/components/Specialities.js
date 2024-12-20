
import React from 'react';
import { faReact, faJsSquare, faPython, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Specialities.css" // Import the CSS file for styling

const Specialties = () => {
    return (
        <section className="specialties">
            <h2>Specialties</h2>
            <div className="specialties-icons">
                <div className="specialty-icon">
                    <FontAwesomeIcon icon={faReact} size="3x" />
                    <p>React</p>
                </div>
                <div className="specialty-icon">
                    <FontAwesomeIcon icon={faJsSquare} size="3x" />
                    <p>JavaScript</p>
                </div>
                <div className="specialty-icon">
                    <FontAwesomeIcon icon={faPython} size="3x" />
                    <p>Python</p>
                </div>
                <div className="specialty-icon">
                    <FontAwesomeIcon icon={faCss3Alt} size="3x" />
                    <p>CSS</p>
                </div>
            </div>
        </section>
    );
};

export default Specialties;