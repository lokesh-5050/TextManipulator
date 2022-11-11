import React , {useState} from "react";


export default function Textform(props) {
  const [text , setText] = useState("Enter text here");
  return (
    <div style={{ width: "70%", marginTop: "3vw" }} className="container">
      <div className="mb-3 ">
        <h1>{props.heading}</h1>

        <textarea className="form-control mt-5" id="myBox" rows="8"></textarea>
        <div style={{display:"flex" , gap:"2vw"}} className="btns">
        <button className="btn btn-primary mt-4">Convert To UpperCase</button>
        <button className="btn btn-primary mt-4">Convert To lowerCase</button>
        <button className="btn btn-primary mt-4">Copy All Text</button>
        <button className="btn btn-primary mt-4">Remove All</button>

        </div>
      </div>
    </div>
  );
}
