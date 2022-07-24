import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    const [cat, setcat] = useState("General");
    const [searchBar, setsearchBar] = useState("Search...")
    const handleOnChange = (event) =>{
        setsearchBar(event.target.value);
    }
    const handleOnClick = (event) => {
        if(searchBar == "Search..."){
            setsearchBar("");
        }
    }
  return (
    <>
    {/* Navbar for large screens */}
    <div className={`bg-black hidden lg:flex sticky top-0 z-10 items-center`}>
        <Link to="/" onClick={()=>setcat("General")} className={`flex items-center`}>
          <img className={`object-contain h-16 w-20 mt-2`} src="https://th.bing.com/th/id/R.54e528d4377b886840ea036dfe471120?rik=Mh3%2fTZVnh6IQXA&riu=http%3a%2f%2fwww.wallpaperbetter.com%2fwallpaper%2f340%2f164%2f849%2fthe-devil-wears-prada-logo-pink-black-background-720P-wallpaper.jpg&ehk=0CoX39bWSsueo7MOpmqzx52k6p%2fHjRRZRU3%2fZzTff2w%3d&risl=&pid=ImgRaw&r=0" alt="" />
          <span className={`fond-extrabold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-2 mt-2 `}>NewsGeek</span>
        </Link>
        <div className={`flex ml-auto items-center`}>
        <Link to="/" onClick={()=>setcat("General")} className={`mr-4 ${cat=="General"? "font-bold scale-105 text-white border-b-2 border-white" : "text-gray-300 hover:scale-105 hover:text-gray-200"}`}>Home</Link>
        <Link to="/Entertainment" onClick={() =>setcat("Entertainment")} className={`mr-4 ${cat=="Entertainment"? "scale-105 text-white border-b-2 border-white font-bold" : "text-gray-300 hover:scale-105 hover:text-gray-200"}`}>Entertainment</Link>
        <Link to="/Health" onClick={()=>setcat("Health")} className={`mr-4 ${cat=="Health"? "scale-105 text-white border-b-2 border-white font-bold" : "text-gray-300 hover:scale-105 hover:text-gray-200"}`}>Health</Link>
        <Link to="/Sports" onClick={()=>setcat("Sports")} className={`mr-4 ${cat=="Sports"? "scale-105 text-white border-b-2 border-white font-bold" : "text-gray-300 hover:scale-105 hover:text-gray-200"}`}>Sports</Link>
        <Link to="/Science" onClick={()=>setcat("Science")} className={`mr-4 ${cat=="Science"? "scale-105 text-white border-b-2 border-white font-bold" : "text-gray-300 hover:scale-105 hover:text-gray-200"}`}>Science</Link>
        <Link to="/Technology" onClick={()=>setcat("Technology")} className={`mr-4 ${cat=="Technology"? "scale-105 text-white border-b-2 border-white font-bold" : "text-gray-300 hover:scale-105 hover:text-gray-200"}`}>Technology</Link>
        <Link to="/Business" onClick={()=>setcat("Business")} className={`mr-4 ${cat=="Business"? "scale-105 text-white border-b-2 border-white font-bold" : "text-gray-300 hover:scale-105 hover:text-gray-200"}`}>Business</Link>
        </div>
        <input type="text" value={searchBar} onClick={handleOnClick} onChange={handleOnChange} className={`text-center ml-auto rounded-md pb-2 pt-2`}/>
        <button className={`pb-1 pt-1 pr-2 pl-2 hover:scale-105 text-white border-2 ml-2 mr-2 border-white rounded-md`}>Search</button>
    </div>
    </>
  )
}

