import React, { useState } from "react";

export default function Textform(props) {
  const { handleAlert, hideAlert } = props;
  const [text, setText] = useState("");
  const [times, setTime] = useState("Time Now");
  // const [theme , setTheme ] = useState("light")


  const toUpperCase = () => {
    console.log(text);
    setText(text.toUpperCase());
    handleAlert("Converted to upperCase Successfully!", "success");
    hideAlert();
  };
  const toLowerCase = () => {
    console.log(text);
    setText(text.toLowerCase());
    handleAlert("Converted to lowerCase Successfully!", "success");
    hideAlert();
  };
  const copyToClip = (e) => {
    console.log(e);
    // console.log(e.target.parentElement.parentElement.children[1].defaultValue)
    // let copyAllText = e.target.parentElement.parentElement.children[2].value;
    let copyAllText = text
    console.log(copyAllText);
    navigator.clipboard.writeText(copyAllText);
    handleAlert("Copied to clipboard Successfully!", "success");
    hideAlert();
  };
  const handleChange = (e) => {
    // console.log(e.target.value);

    setText(e.target.value);
  };
  const removeAll = () => {
    setText("");
    handleAlert("Empty Input Successfully!", "success");
    hideAlert();
  };
  const time = () => {
    let today = new Date().toLocaleTimeString();
    setTime(today);
  };
  setInterval(time, 1000);

  const handleRemoveExtraSpaces = () => {
    let ourValue = document.getElementById("myBox").value;
    let newtext = ourValue.split(/[ ]+/);
    setText(newtext.join(" "));
    handleAlert("Removed extra spaces Successfully!", "success");
    hideAlert();
  };

  return (
    <>
      <div
        style={{
          width: "70%",
          marginTop: "2vw",
          color: props.mode === "light" ? "black" : "#fff",
        }}
        className={`container mt-5`}
      >
        <div className="mb-3 ">
          <h1>{props.heading}</h1>
          <div className="time mt-2" onLoad={time}>
            {times}
          </div>

          <textarea
            className="form-control mt-4"
            id="myBox"
            rows="8"
            value={text}
            placeholder={"Enter texts here"}
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
            <button
              className="btn btn-primary mt-4"
              onClick={handleRemoveExtraSpaces}
            >
              RemoveExtraSpaces
            </button>
          </div>
          <div className="conatiner my-4">
            <h6>
              {text.replace(/ /g, "").length} Characters &{" "}
              {text.length > 0 ? text.split(" ").length : "0"} Words
            </h6>
            <h5>Preview</h5>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
}
