
import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('dark'); 
  
  const toggleMode = () => {
    if(mode === 'dark')
      setMode('light');
    else
      setMode('dark');  
  };
  return (
    <>
      
        <Router>
          <Navbar title = "Text Utils" aboutText = "About Us" mode = {mode} toggleMode={toggleMode}/>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<TextForm heading="Enter the Text to analyze below"/>} />
              <Route exact path="/about" element={<About />} />
            </Routes>
          </div>
        </Router>
      
    </>
  );
}

export default App;
