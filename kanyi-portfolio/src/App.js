
import React from 'react';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import About from './components/About';
import Specialties from './components/Specialities';    
import Projects from './components/Projects';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Introduction />
            <About /> 
            <Specialties />
            <Projects/>
            {/* Other components will go here */}
        </div>
    );
}

export default App;