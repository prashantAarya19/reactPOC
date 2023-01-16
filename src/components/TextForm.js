import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("");  
  const handletoUpperCase = () => {
    setText(text.toUpperCase());
  }

  const handletoLowerCase = () => {
    setText(text.toLowerCase());
  }

  const handleFirstLetterCapital = () => {
    let tempText = text;
    let tempTextArray = tempText.split(" ");
    let formattedText = '';
    for(let i = 0; i < tempTextArray.length; i++) {
      formattedText = formattedText+' '+capitlizeFirstLetter(tempTextArray[i]);
    }
    setText(formattedText);
  }

  const capitlizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase()+text.slice(1);
  }

  const handleClearText = () => {
    setText('');
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  return (
     <>
      <div className="container">
        <h3>{props.heading}</h3>
        <div className="mb-3"> 
            <textarea className="form-control" id="myTextBox" onChange={handleOnChange} value={text} rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handletoUpperCase}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handletoLowerCase}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleFirstLetterCapital}>First letter capital</button>
        <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear text</button>
     </div>
      <div className="container my-1">
        <h5>Your text summry</h5>
        <p>{text.split(' ').length} Word and {text.length} Characters</p>
        <p>{0.008 * text.split(' ').length} Minutes to read</p>
        <h5>Preview</h5>
        <p>{text}</p>
      </div>
     </> 
     
  )
}
