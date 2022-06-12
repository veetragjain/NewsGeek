import React, { useState } from 'react'

export default function Navbar(props) {
    const [a, seta] = useState(0);
    const [text, settext] = useState("Search...");
    const theme = [
        {
            anti: "white",
            main: "black",
            logotext: "text-black",
            text: "text-gray-500",
            bg: "bg-gray-50", 
            htext: "text-black"
        },
        {
            anti: "black",
            main: "white",
            logotext:"text-white",
            text: "text-gray-400",
            bg: "bg-black",
            htext: "text-white"
        }
    ];
    const handleOnChange = (event) => {
        let newtext = event.target.value;
        settext(newtext);
    }
    const handleOnClick = () => {
        if(a==0){
            seta(1);
            settext("");
        }
    }
    const clicked = (event) => {
        console.log(event.target.style);
    }
  return (
    <>
    <nav className={`flex ${theme[props.mode].bg}`}>
        <h3 className={`mt-1 mb-2 ml-4 font-bold text-xl ${theme[props.mode].logotext}`}>ThinkSchool</h3>
        <ul className="flex ml-16 pt-1">
            <li className={`mr-3 p-1 mb-1 cursor-pointer border-${theme[props.mode].main} ${props.pageMode[0]==1?"font-semibold scale-105 border-b-2 " + theme[props.mode].htext:theme[props.mode].text + " hover:scale-105 hover:"+ theme[props.mode].htext}`} onClick={props.changeToHome}>Home</li>
            <li className={`mr-3 p-1 mb-1 cursor-pointer border-${theme[props.mode].main} ${props.pageMode[1]==1?"font-semibold scale-105 border-b-2 "+ theme[props.mode].htext:theme[props.mode].text + " hover:scale-105 hover:"+ theme[props.mode].htext}`}onClick={props.changeToLatest}>Latest</li>
            <li className={`mr-3 p-1 mb-1 cursor-pointer border-${theme[props.mode].main} ${props.pageMode[2]==1?"font-semibold scale-105 border-b-2 " + theme[props.mode].htext:theme[props.mode].text + " hover:scale-105 hover:"+ theme[props.mode].htext}`}onClick={props.changeToAboutUs}>About Us</li>
            <li className={`mr-3 p-1 mb-1 cursor-pointer border-${theme[props.mode].main} ${props.pageMode[3]==1?"font-semibold scale-105 border-b-2 " + theme[props.mode].htext:theme[props.mode].text + " hover:scale-105 hover:"+ theme[props.mode].htext}`}onClick={props.changeToContactUs}>Contact Us</li>
        </ul>
        <input value={text}  onChange={handleOnChange} onClick={handleOnClick} type="text" className={`rounded-md text-center mr-2 ml-auto mt-1.5 mb-1.5 text-gray-600 border-${theme[props.mode].main} border-2`}/>
        <button className={`m-1.5 rounded-lg pl-2 pr-2 mr-4 bg-black text-white border-2 hover:scale-105`} onClick={props.changeMode}>Search</button>
    </nav>
    </>
  )
}
