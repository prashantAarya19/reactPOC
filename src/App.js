
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title = "Text Utils" aboutText = "About Us"/>
      <div className="container">
        <TextForm heading="Enter the Text to analyze below"/>
      </div>
    </>
  );
}

export default App;
