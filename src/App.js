import React, { useState } from 'react';
import "./App.css";
import Navbar from "./components/Navbar"

function App() {
  const [darkmode, setdarkmode] = useState(0);
  const [pageMode, setpageMode] = useState([1,0,0,0])
  const changeToHome = () => {
    let newPageMode = [1,0,0,0];
    setpageMode(newPageMode);
  }
  const changeToLatest = () => {
    let newPageMode = [0,1,0,0];
    setpageMode(newPageMode);
  }
  const changeToAboutUs = () => {
    let newPageMode = [0,0,1,0];
    setpageMode(newPageMode);
  }
  const changeToContactUs = () => {
    let newPageMode = [0,0,0,1];
    setpageMode(newPageMode);
  }
  const [body, setbody] = useState("white")
  const changeMode = () => {
    if(darkmode==1){
      setdarkmode(0);
      setbody("white");
    }
    else{
      setdarkmode(1);
      setbody("black");
    }
  }
  return (
    <>
    <Navbar mode={darkmode} pageMode = {pageMode} changeToHome={changeToHome} changeToAboutUs={changeToAboutUs} changeToContactUs ={changeToContactUs} changeToLatest={changeToLatest}/>
    <div className={`bg-${body} h-screen w-screen`}></div>
    </>
  );
}

export default App;
