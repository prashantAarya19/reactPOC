
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';

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
      <Navbar title = "Text Utils" aboutText = "About Us" mode = {mode} toggleMode={toggleMode}/>
      <div className="container">
        {/* <TextForm heading="Enter the Text to analyze below"/> */}
        <About />
      </div>
    </>
  );
}

export default App;
