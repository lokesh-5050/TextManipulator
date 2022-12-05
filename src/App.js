import React, { useState } from "react";
import "../src/styles/App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

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

  // const toogleDarkMode = () => {
  //   if (mode === "light") {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "#333";
  //     handleAlert("Dark Mode Activated!", "success");
  //     hideAlert();
  //   } else if (mode === "dark") {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     handleAlert("Light Mode Activated!", "success");
  //     hideAlert();
  //   }
  // };
  const hideAlert = () => {
    setTimeout(() => {
      setAlert("");
    }, 2000);
  };
  return (
    <>
      <Navbar
        title="LokeshApp"
        aboutText="About Us"
        mode={mode}
        // toogleDarkMode={toogleDarkMode}
        handleThemes={handleThemes}
      />
      <Alert alert={alert} />
      <Textform heading="Enter texts to analyize" handleAlert={handleAlert} mode={mode} hideAlert={hideAlert} />
    </>
  );
}

export default App;
