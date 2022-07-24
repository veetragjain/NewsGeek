import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

export default function Navbarsm(props) {
    const [menuCross, setmenuCross] = useState("hidden")
    const [menuSet, setmenuSet] = useState("inline-flex")
    const menuSetClick = () =>{
        setmenuSet("hidden");setmenuCross("inline-flex");props.cview("hidden")
    }
    const menuCrossClick = () =>{
        setmenuCross("hidden");setmenuSet("inline-flex");props.cview("flex-row");
    }
    const optionClick = () =>{
      setmenuCross("hidden");setmenuSet("inline-flex");props.cview("flex-row")
      window.scroll({top: 0,left: 0, behavior: 'smooth'});
    }
  return (
    <>
    {/* Navbar for small screens */}
    <div className={`flex bg-black lg:hidden sticky top-0 z-10 items-center`}>
      <Link to="/" className={`flex items-center`}>
        <img className={`object-contain h-16 w-20 mt-2`} src="https://th.bing.com/th/id/R.54e528d4377b886840ea036dfe471120?rik=Mh3%2fTZVnh6IQXA&riu=http%3a%2f%2fwww.wallpaperbetter.com%2fwallpaper%2f340%2f164%2f849%2fthe-devil-wears-prada-logo-pink-black-background-720P-wallpaper.jpg&ehk=0CoX39bWSsueo7MOpmqzx52k6p%2fHjRRZRU3%2fZzTff2w%3d&risl=&pid=ImgRaw&r=0" alt="" />
        <span className={`fond-extrabold text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-2 mt-2 ml-auto`}>NewsGeek</span>
      </Link>
        <svg xmlns="http://www.w3.org/2000/svg" onClick={menuSetClick} className={`h-5 w-5 ${menuSet} ml-auto mr-3 mt-1 text-pink-600`}
             viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" onClick={menuCrossClick} className={`h-6 w-6 ${menuCross} ml-auto mr-3 mt-1 text-pink-600`}
            id="cross" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    </div>
    <div className={`flex-col ${menuCross} lg:hidden bg-gray-200 w-screen h-screen`}>
      <div onClick={optionClick} className="flex py-2  hover:text-white justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
          <path
            d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
        <Link to="/">
          Home
        </Link>
      </div>
      <div onClick={optionClick} className="flex py-2  hover:text-white justify-center">
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-purple-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm.001 6c-.001 0-.001 0 0 0h-.465l-2.667-4H20l.001 4zM15.5 15 10 18v-6l5.5 3zm-.964-6-2.667-4h2.596l2.667 4h-2.596zm-2.404 0H9.536L6.869 5h2.596l2.667 4zM4 5h.465l2.667 4H4V5z"/></svg>
        <Link to="/Entertainment">
          Entertainment
        </Link>
      </div>
      <div onClick={optionClick} className="flex py-2  hover:text-white justify-center">
      <svg enableBackground="new 0 0 64 64" className="h-5 w-5 text-purple-400" fill="currentColor" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M52,13.475H12c-2.2,0-4,1.8-4,4v12.481h12.301l2.688-6.877c0.307-0.785,1.094-1.299,1.914-1.271  c0.842,0.022,1.581,0.569,1.847,1.368l3.803,11.437l4.104-9.763c0.302-0.717,0.992-1.194,1.77-1.223  c0.802-0.034,1.502,0.396,1.855,1.089l2.676,5.241h2.709c1.104,0,2,0.896,2,2s-0.896,2-2,2h-3.934c-0.752,0-1.439-0.421-1.781-1.09  l-1.275-2.499l-4.499,10.7c-0.313,0.744-1.041,1.225-1.843,1.225c-0.026,0-0.052,0-0.078-0.002  c-0.833-0.031-1.558-0.576-1.821-1.367L24.7,29.689l-1.17,2.995c-0.3,0.767-1.039,1.272-1.863,1.272H8v12.568c0,2.2,1.8,4,4,4h40  c2.2,0,4-1.8,4-4v-29.05C56,15.275,54.2,13.475,52,13.475z"/></svg>
        <Link to="/Health">
          Health
        </Link>
      </div>
      <div onClick={optionClick} className="flex py-2  hover:text-white justify-center">
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-purple-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title/><g dataname="Layer 2" id="Layer_2"><path d="M20.81,13.89a8.12,8.12,0,0,0-1.15-9.55,7.62,7.62,0,0,0-5.44-2.2h0A9.32,9.32,0,0,0,5.1,11.26a7.88,7.88,0,0,0,.64,3.13l-3,2.15a3.39,3.39,0,0,0,2,6.16H5a3.39,3.39,0,0,0,2.48-1.41l2.16-3a8,8,0,0,0,3.13.64,8.6,8.6,0,0,0,2.83-.49,3.49,3.49,0,1,0,5.24-4.52ZM9.24,6.29a7.13,7.13,0,0,1,5-2.14h0a5.63,5.63,0,0,1,4,1.61A6.12,6.12,0,0,1,19,13a3.45,3.45,0,0,0-.48,0,3.5,3.5,0,0,0-3.4,2.69L7.78,8.36A7.44,7.44,0,0,1,9.24,6.29ZM5.83,20.12a1.39,1.39,0,0,1-1,.58,1.35,1.35,0,0,1-1.1-.4,1.37,1.37,0,0,1-.4-1.1,1.39,1.39,0,0,1,.58-1l2.88-2.06a7.38,7.38,0,0,0,.53.59,7.23,7.23,0,0,0,.59.53Zm2.88-4.83a5.62,5.62,0,0,1-1.61-4,6.42,6.42,0,0,1,0-.71l6.29,6.29A5.75,5.75,0,0,1,8.71,15.29ZM18.5,18A1.5,1.5,0,1,1,20,16.5,1.5,1.5,0,0,1,18.5,18Z"/></g></svg>
        <Link to="/Sports">
          Sports
        </Link>
      </div>
      <div onClick={optionClick} className="flex py-2  hover:text-white justify-center">
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-purple-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title/><path d="M23.911,6.593A.986.986,0,0,0,22.647,6a3.185,3.185,0,0,1-.318.088.248.248,0,0,1-.236-.066L17.955,1.879a.249.249,0,0,1-.063-.246c.03-.1.061-.207.1-.309A.99.99,0,0,0,16.127.655a8.831,8.831,0,0,0,.194,6.484,6.847,6.847,0,0,1,.288,4.465.251.251,0,0,1-.419.111L12.263,7.788a.25.25,0,0,1,.111-.418,7.05,7.05,0,0,1,1.686-.245.989.989,0,0,0,.969-1.009,1.019,1.019,0,0,0-1.009-.969A9.148,9.148,0,0,0,7.788,7.8,9.012,9.012,0,0,0,5.83,17.631a6.891,6.891,0,0,1,.517,2.017L4.024,17.325a.98.98,0,0,0-.7-1.7,10.5,10.5,0,0,0-2.664.512.989.989,0,0,0,.333,1.921A1,1,0,0,0,1.323,18c.1-.037.21-.062.316-.089a.25.25,0,0,1,.237.066l4.139,4.139a.251.251,0,0,1,.063.247c-.03.106-.063.211-.1.316a.988.988,0,1,0,1.86.67,8.825,8.825,0,0,0-.19-6.493,6.835,6.835,0,0,1-.288-4.465.252.252,0,0,1,.177-.176.248.248,0,0,1,.242.064L11.706,16.2a.25.25,0,0,1-.111.418,6.982,6.982,0,0,1-1.7.245.99.99,0,0,0,.018,1.979H9.93a9.158,9.158,0,0,0,6.251-2.653,9.019,9.019,0,0,0,1.546-2.084v0a8.945,8.945,0,0,0,.411-7.747,6.877,6.877,0,0,1-.517-2.016l2.3,2.3a.976.976,0,0,0-.354.767.991.991,0,0,0,.988.962h.029a10.545,10.545,0,0,0,2.728-.514A.989.989,0,0,0,23.911,6.593Zm-9.876,8.841a.248.248,0,0,1-.325-.024L8.421,10.121A7.038,7.038,0,0,1,9.187,9.2a6.788,6.788,0,0,1,.746-.64.251.251,0,0,1,.326.024L15.4,13.72a.251.251,0,0,1,.024.326,6.312,6.312,0,0,1-1.387,1.388Z"/></svg>
        <Link to="/Science">
          Science
        </Link>
      </div>
      <div onClick={optionClick} className="flex py-2   hover:text-white justify-center">
      <svg viewBox="0 0 512 512" className="h-5 w-5 text-purple-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M160 352h192V160H160V352zM448 176h48C504.8 176 512 168.8 512 160s-7.162-16-16-16H448V128c0-35.35-28.65-64-64-64h-16V16C368 7.164 360.8 0 352 0c-8.836 0-16 7.164-16 16V64h-64V16C272 7.164 264.8 0 256 0C247.2 0 240 7.164 240 16V64h-64V16C176 7.164 168.8 0 160 0C151.2 0 144 7.164 144 16V64H128C92.65 64 64 92.65 64 128v16H16C7.164 144 0 151.2 0 160s7.164 16 16 16H64v64H16C7.164 240 0 247.2 0 256s7.164 16 16 16H64v64H16C7.164 336 0 343.2 0 352s7.164 16 16 16H64V384c0 35.35 28.65 64 64 64h16v48C144 504.8 151.2 512 160 512c8.838 0 16-7.164 16-16V448h64v48c0 8.836 7.164 16 16 16c8.838 0 16-7.164 16-16V448h64v48c0 8.836 7.164 16 16 16c8.838 0 16-7.164 16-16V448H384c35.35 0 64-28.65 64-64v-16h48c8.838 0 16-7.164 16-16s-7.162-16-16-16H448v-64h48C504.8 272 512 264.8 512 256s-7.162-16-16-16H448V176zM384 368c0 8.836-7.162 16-16 16h-224C135.2 384 128 376.8 128 368v-224C128 135.2 135.2 128 144 128h224C376.8 128 384 135.2 384 144V368z"/></svg>
        <Link to="/Technology">
          Technology
        </Link>
      </div>
      <div onClick={optionClick} className="flex py-2  hover:text-white justify-center">
      <svg enableBackground= "0 0 24 24" className="h-5 w-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="info"/><g id="icons"><path d="M18,7h-1V6c0-2.2-1.8-4-4-4h-2C8.8,2,7,3.8,7,6v1H6c-2.2,0-4,1.8-4,4v7c0,2.2,1.8,4,4,4l12,0c2.2,0,4-1.8,4-4v-7   C22,8.8,20.2,7,18,7z M10,6c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v1h-4V6z M13,19h-2c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1h2   c0.6,0,1,0.4,1,1C14,18.6,13.6,19,13,19z" id="work"/></g></svg>
        <Link to="/Business">
          Business
        </Link>
      </div>
    </div>
    </>
  )
}
