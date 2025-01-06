
import React from 'react';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import About from './components/About';
import Specialties from './components/Specialities';  
import Experience from './components/Experience';  
import Projects from './components/Projects';
import Contact from './components/Contacts';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Introduction />
            <About /> 
            <Specialties />
            <Experience /> 
            <Projects/>
            <Contact />  {/* Add the Contact component */}
            {/* Other components will go here */}
        </div>
    );
}

export default App;