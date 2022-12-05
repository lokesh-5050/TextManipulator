import React, { useState } from "react";
import "../src/styles/App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("#fff");
  const [alert, setAlert] = useState(null);

  const handleThemes = (e) => {
    console.log(e.target.className.split(" ")[1])
    let themeColor = e.target.className.split(" ")[1]
    setMode(themeColor)
    document.body.style.backgroundColor = `${themeColor}`
  }
  const handleAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
  };

 
  const hideAlert = () => {
    setTimeout(() => {
      setAlert("");
    }, 2000);
  };
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={ <Textform/>}></Route>
          <Route exact path="/nav" element={<Navbar/>}></Route>
        </Routes>
      </Router>
    </>

  );
}

export default App;
