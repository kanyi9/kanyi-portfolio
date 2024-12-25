
// import React from 'react';
// import './Introduction.css';

// const Introduction = () => {
//     return (
//         <section className="introduction">
//             <div className="introduction-content slide-in-left">
//                 <h1>Peter Kanyi</h1>
//                 <h2>Full stack developer </h2>
//                 <p>Passionate and innovative thinker with a track record of building full stack applications and front-end using Python, Flask, 
// React, Java Script and restful API architecture. Proficient in Python with Flask and JavaScript-based programming, with a 
// strong background in team building and project management. Skilled in frontend design, with expertise in UI/UX 
// principles, responsive design, and CSS frameworks like Bootstrap and Tailwind CSS. Experienced in state management 
// and proficient in build tools like Webpack. Committed to accessibility compliance and passionate about delivering 
// exceptional user experiences.
//                 </p>
//                 <p>This portfolio showcases my skills, projects, and experiences.</p>
//             </div>
//             <div className="introduction-image slide-in-right">
//                 <img src="./images/kanyi.jpg" alt="Your Name" />
//             </div>
//         </section>
//     );
// };

// export default Introduction;


import React from 'react';
import './Introduction.css';

const Introduction = () => {
    return (
        <section className="introduction">
            <div className="introduction-content bounce">
                <h1>Peter Kanyi</h1>
                <h2>Full Stack Developer</h2>
                <p>
                    Passionate and innovative thinker with a track record of building full stack applications and front-end using Python, Flask, 
                    React, JavaScript, and RESTful API architecture. Proficient in Python with Flask and JavaScript-based programming, with a 
                    strong background in team building and project management. Skilled in frontend design, with expertise in UI/UX 
                    principles, responsive design, and CSS frameworks like Bootstrap and Tailwind CSS. Experienced in state management 
                    and proficient in build tools like Webpack. Committed to accessibility compliance and passionate about delivering 
                    exceptional user experiences.
                </p>
                <p>This portfolio showcases my skills, projects, and experiences.</p>
            </div>
            <div className="introduction-image bounce">
                <img src="./images/kanyi.jpg" alt="Your Name" />
            </div>
        </section>
    );
};

export default Introduction;