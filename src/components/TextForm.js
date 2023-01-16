import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");  
  const handleOnClick = () => {
    // const updatedText = text.toUpperCase();
    setText(text.toUpperCase());
  }
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  }
  return (
     <div className="my-3">
        <h3>{props.heading}</h3>
        <div className="mb-3"> 
            <textarea className="form-control" id="myTextBox" onChange={handleOnChange} value={text} rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleOnClick}>Convert to Uppercase</button>
     </div>
  )
}
