import React, { useState } from "react";
import "./Button.css";

export default function TextForm(props) {
  // Creating a state , here twxt is a variable which holds the value of useState and
  //   setText is a method via which we can update the value of text.
  const [text, setText] = useState("");

  // Defining convert to  uppercase function
  const textToUppercase = () => {
    let uppercaseText = text.toUpperCase();
    setText(uppercaseText);
  };

  // Defining convert to  lowerrcase function
  const textToLowercase = () => {
    let lowercaseText = text.toLowerCase();
    setText(lowercaseText);
  };

  // To clear text function
  const clearText = () => {
    setText("");
  };

  // Handling onChange event
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  return (
    <>
      <div className="mb-3">
        <label htmlFor="textBox" className="form-label">
          <h1>{props.heading}</h1>
        </label>
        <textarea
          className="form-control"
          id="textBox"
          placeholder="Enter your text here."
          value={text}
          onChange={handleOnChange}
          rows="9"
        />
      </div>
      {/* Button function */}
      <div className="button-container">
        <button type="button" className="btn " onClick={textToUppercase}>
          Convert to Uppercase
        </button>
        <button type="button" className="btn " onClick={textToLowercase}>
          Convert to Lowercase
        </button>
        <button type="button" className="btn " onClick={clearText}>
          Clear Text
        </button>
      </div>

      {/* Text analysis part */}
      <div className="container my-3">
        <h2>Analysis of your text is :</h2>
        <p>
          Words : <strong>{text.split(" ").length - 1}</strong> and Characters :
          <strong> {text.length}</strong>
        </p>
        <p>
          Reading Time :{" "}
          <strong>
            {Math.round(
              (0.008 * text.split(" ").length - 0.008 + Number.EPSILON) * 100
            ) / 100}{" "}
            minutes
          </strong>
        </p>
      </div>
    </>
  );
}
