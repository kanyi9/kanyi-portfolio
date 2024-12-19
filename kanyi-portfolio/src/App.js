
import React from 'react';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Specialties from './components/Specialities';    

function App() {
    return (
        <div className="App">
            <Navbar />
            <Introduction />
            <Specialties />
            {/* Other components will go here */}
        </div>
    );
}

export default App;