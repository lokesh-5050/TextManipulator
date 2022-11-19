import React , {useState} from 'react'
import '../src/styles/App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  const [mode , setMode] = useState('dark')

  return (
    <>
    <Navbar title = "LokeshApp" aboutText="About Us" mode={mode} ></Navbar>
    <Textform heading="Enter texts to analyize"></Textform>
    </>
  );
} 

export default App;
