// import React from 'react';

// const About = () => {
//     return (
//         <section className="about">
//             <div class="about-container">
//             <h2>About Me</h2>
//             <div className="about-content">
//                 {/* <div className="about-image">
//                     <img src="./images/your-picture.jpg" alt="Your Name" />
//                 </div> */}
//                 <div className="about-text">
//                     <p className="about-text-sentence about-text-sentence-1">Hello, I'm [Your Name].</p>
//                     <p className="about-text-sentence about-text-sentence-2">I am a [Your Profession] with [Your Experience] years of experience in software development.</p>
//                     <p className="about-text-sentence about-text-sentence-3">I specialize in building web applications, mobile apps, and APIs using modern technologies like React, Angular, Node.js, and Python.</p>
//                     <p className="about-text-sentence about-text-sentence-4">I am passionate about learning new technologies and staying up-to-date with industry trends.</p>
//                     <p className="about-text-sentence about-text-sentence-5">I am always looking to collaborate with other developers and contribute to open-source projects.</p>
//                     <p className="about-text-sentence about-text-sentence-6">Feel free to reach out to me if you have any questions or would like to discuss potential projects.</p>
//                 </div>
//             </div>
//             </div>
//         </section>
//     );
// };

// export default About;

import React from 'react';
import './About.css'; // Import the CSS file for styling

const AboutMe = () => {
    return (
        <div className="about-container">
            <h2>About Me</h2>
            <p>
                Hello! I'm [Your Name], a passionate web developer with a love for creating beautiful and functional web applications. 
                I enjoy working with modern technologies and continuously learning new skills to improve my craft.
            </p>
            <p>
                In my free time, I love exploring new places, reading books, and contributing to open-source projects. 
                I'm always looking for new challenges and opportunities to grow as a developer.
            </p>
        </div>
    );
};

export default AboutMe;