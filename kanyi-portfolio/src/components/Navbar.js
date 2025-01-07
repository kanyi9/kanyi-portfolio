// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import './Navbar.css'; // Import the CSS file for styling

// const Navbar = () => {
    
//     return (
//         <nav className="navbar">
//             <div className="navbar-logo">
//                 <img src="./images/kanyi.jpg" alt="Profile" />
//             </div>
//             <ul className="navbar-links">
//             <li>
//     <a href="https://www.linkedin.com/in/peter-kanyi-9a2003318/" target="_blank" rel="noopener noreferrer">
//         <FontAwesomeIcon icon={['fab', 'linkedin']} />
//     </a>
// </li>
//         <li>
//             <a href="https://github.com/kanyi9" target="_blank" rel="noopener noreferrer">
//                 <img src="./images/github.svg" alt="GitHub" />
//             </a>
//         </li>
//     </ul>
//         </nav>
//     );
// };

// export default Navbar;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; // Import LinkedIn and GitHub icons
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="./images/kanyi.jpg" alt="Profile" />
            </div>
            <ul className="navbar-links">
                <li>
                    <a href="https://www.linkedin.com/in/peter-kanyi-9a2003318/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/kanyi9" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="social-icon" />
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;