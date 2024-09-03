import React, { useState } from "react";
import "./style.css";

const State = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState(false);
  const [open, setOpen] =useState(false);


  const handleChange = (event) => {
   const newText = event.target.value;


    if (newText.length > 100) {
      alert("Your word length is over")
      setError("Hello");
    } else {
      setError("");
      setText(newText); 
    }
  };

  const handleClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
};

const handleClear = () =>{
  setText("");
  setOpen(true);
}
const closePopup = () => {
  setOpen(false);
}
const charCount = text.length;
const wordCount = text.split(/\b\S+\b/g).filter(Boolean).length;
console.log(wordCount, "wordCount");
  const wordCounts = text.split(/\b\S+\b/g).filter(Boolean);
  wordCounts.forEach(word => console.log(word));

  const totalWordLength = wordCounts.reduce((acc, word) => acc + word.length, 0);
console.log(totalWordLength, "totalWordLength");
const averageWordLength = wordCount === 0 ? 0 : totalWordLength / wordCount;
console.log(averageWordLength, "averageWordLength");
  
  return (
    <>
    <div className="text-transform-main-div">
      <h1>TEXT TRANSFORM APP</h1>
      <div className="text-transform-div">
        <textarea
          row="3"
          value={text}
          placeholder="Enter Your Text here"
          onChange={handleChange}
        ></textarea>
        <button className="tranform-button" onClick={handleClick}>
          Submit
        </button>
        <button className="tranform-button" onClick={handleClear}>
          Hide
        </button>
      </div>
      <p>({text.split(" ").length})</p>
      <p><b><i>{0.08 * text.split(" ").length}</i></b> take time to read above word</p>
      {error && <div className="error-message">{error}</div>}
      <div className="total-character">{charCount}</div>
      <div className="total-character">{wordCount}</div>

      <h2>Preview</h2>
      <p>{text}</p>

      <div>Average Word Length: {averageWordLength.toFixed(2)}</div>
    </div>
    {open && (
    <div className="popup">
    <div className="popup-innner-div">
    <div className="close-icon" onClick={closePopup}>X</div>
      <p>Your word length is over</p>
    </div>
    </div>
    )}
    </>
  );
};

export default State;
