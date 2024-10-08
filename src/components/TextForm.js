import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('Enter text here');
  const [color, setColor] = useState('#042743'); 

  const handleClick = () => {
    let upperText = text.toUpperCase();
    setText(upperText);
    props.setAlertF("Converted to UpperText","success");
  };

  const handleLoClick = () => {
    let lowerText = text.toLowerCase();
    setText(lowerText);
    props.setAlertF("Converted to LowerText","success");
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const clearText = () => {
    setText('');
    props.setAlertF("Text Cleared","success");
  };

  const handleColorClick = () => {
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');
    setColor(randomColor); 
    props.setAlertF("Text color changed","success");
  };

  return (
    <>
      <div className="container">
        <h1 style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
              color: props.mode === 'dark' ? 'white' : '#042743',
            }}
            id="myBox"
            rows={8}
          />
        </div>
        <button className="btn btn-primary mx-2" onClick={handleClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleColorClick}>
          Change Text Color
        </button>
        <button className="btn btn-primary mx-2" onClick={clearText}>
          Clear
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}
      >
        <h1>Your text Summary</h1>
        <p>
          {text.split(' ').filter((word) => word.length > 0).length} words and {text.length}{' '}
          characters
        </p>
        <p>{0.008 * text.split(' ').filter((word) => word.length > 0).length} Minutes read</p>
        <h2>Preview</h2>
        <p style={{ color: props.mode === 'dark' ? color : color }}>
          {text.length > 0 ? text : 'Enter something to preview here'}
        </p>
      </div>
    </>
  );
}
