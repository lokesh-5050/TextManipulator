import React , {useState} from 'react'
import '../src/styles/App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  const [mode , setMode] = useState('light')


  const toogleDarkMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#333'
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
    <Navbar title = "LokeshApp" aboutText="About Us" mode={mode} toogleDarkMode={toogleDarkMode} ></Navbar>
    <Textform heading="Enter texts to analyize" mode={mode}></Textform>
    </>
  );
} 

export default App;
