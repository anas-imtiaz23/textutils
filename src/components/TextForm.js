import { useState } from "react";
import React from 'react';

export default function TextForm(props) {
  const handleupclick = () => {
    console.log("upper case was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleloclick = () => {
    console.log("lower case was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleonchange = (event) => {
    console.log("on change");
    setText(event.target.value)
  }

  const handleExtractEmail = () => {
    const emails = text.match(/[\w]+@[\w]+\.[\w]+/g);
    console.log(emails);
    alert(emails.join(", "));
  }

  const [text, setText] = useState("enter text here");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea  
            className="form-control" 
            value={text} 
            onChange={handleonchange} 
            style={{backgroundColor:props.mode==='dark'||'green'?'grey':'white',color:props.mode==='dark'||'green'?'white':'black'}}
            
            id="exampleFormControlTextarea1" 
            rows="8">
          </textarea>
        </div>
        <button 
          className="btn-primary mx-2" 
          onClick={handleupclick} 
        >
          Convert to upper case
        </button>
        <button 
          className="btn-primary mx-2" 
          onClick={handleloclick} 
        >
          Convert to lower case
        </button>
        <button 
          className="btn-primary mx-2" 
          onClick={handleExtractEmail} 
        >
          Extract Emails
        </button>
        <div>
        </div>
        <div className="container my-3" >
          <h1>This is the text summary</h1>
          <p> {text.split(" ").length} words and {text.length} characters</p>
          <p>{0.008 * text.split(" ").length} Minutes read</p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
