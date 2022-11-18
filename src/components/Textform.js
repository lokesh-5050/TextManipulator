import React, { useEffect, useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  const [times , setTime] = useState("Time Now")
  // const [theme , setTheme ] = useState("light")
  const [theme , setTheme ] = useState(
    localStorage.getItem('theme' || 'light')
  )
  const [btnText , setBtnText] = useState("Enable Dark Mode")

  const changeTheme = ()=> {
    if(theme === 'light'){
      setTheme('dark')
      setBtnText('Enable Light Mode')
    }else{
      setTheme('light')
      setBtnText('Enable Dark Mode')
    }
  };
  useEffect(() =>{
    localStorage.setItem('theme' , theme)
    document.body.className = theme;
  }, [theme])
  
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

  

  const handleRemoveExtraSpaces = () => {
    let ourValue = document.getElementById("myBox").value;
    let newtext = ourValue.split(/[ ]+/)
    setText(newtext.join(" "))
    
  };

  return (
    <>
    <div style={{ width: "70%", marginTop: "2vw" }} className={`container ${theme}`}>
      <div className="mb-3 ">
        <h1>{props.heading}</h1>
        <div className="time mt-2" onLoad={time}>{times}</div>
        <textarea
          className="form-control mt-5"
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
          <button type="button" className="btn btn-primary mt-4" onClick={changeTheme} >{btnText}</button>
          

        </div>
        <div className="conatiner my-4">
          <h6>{text.replace(/ /g,"").length} Characters & {text.length>0?text.split(' ').length:"0"} Words</h6>
          <h5>Preview</h5>
          <p>{text}</p>
        </div>
      </div>
    </div>
    </>
  );
}
