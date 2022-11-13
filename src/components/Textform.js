import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("Enter texts here");
  const [times , setTime] = useState("Time Now")
  // const removeWords = () =>{
  //   let textAreaWords = ""
  //   setText(textAreaWords)
  // }
 
  
  const toUpperCase = () => {
    console.log(text);
    setText(text.toUpperCase());
  };
  const toLowerCase = () => {
    console.log(text);
    setText(text.toLowerCase());
  };
  const copyToClip = (e) => {
    console.log(e);
    // console.log(e.target.parentElement.parentElement.children[1].defaultValue)
    let copyAllText = e.target.parentElement.parentElement.children[2].value;
    console.log(copyAllText)
    navigator.clipboard.writeText(copyAllText);
  };
  const handleChange = (e) => {
    // console.log(e.target.value);

    setText(e.target.value);
  };
  const removeAll = () => {
    setText("");
  };
  const time = ()=>{
    let today = new Date().toLocaleTimeString()
    setTime(today)
  }
  setInterval(time , 1000)
  return (
    <div style={{ width: "70%", marginTop: "3vw" }} className="container">
      <div className="mb-3 ">
        <h1>{props.heading}</h1>
        <div className="time" onLoad={time}>{times}</div>
        <textarea
          className="form-control mt-5"
          id="myBox"
          rows="8"
          value={text}
          // o  nFocus={removeWords}
          
          onChange={handleChange}
        ></textarea>
        <div style={{ display: "flex", gap: "2vw" }} className="btns">
          <button className="btn btn-primary mt-4" onClick={toUpperCase}>
            Convert To UpperCase
          </button>
          <button className="btn btn-primary mt-4" onClick={toLowerCase}>
            Convert To lowerCase
          </button>
          <button className="btn btn-primary mt-4" onClick={copyToClip}>
            Copy All Text
          </button>
          <button className="btn btn-primary mt-4" onClick={removeAll}>
            Remove All
          </button>
        </div>
      </div>
    </div>
  );
}
