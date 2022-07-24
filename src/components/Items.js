import React from "react";

const Items = (props) => {
  return (
    <div>
      <div href={`${props.url}`} className={`mt-4 mb-4 h-100 w-60 ${props.view} bg-white shadow-2xl rounded-lg hover:scale-110`}>
          <img src={props.image} className={`h-40 w-60 rounded-t-lg`} alt="Image"/>
          <h4 className={`text-black font-bold cursor-default`}>{props.title.length>=70?props.title.slice(0,70):props.title.padEnd(70-props.title.length,".")}...</h4>
          <span className={`overflow-hidden bg-gradient-to-b cursor-default from-white to-gray-400 block`}>{props.description!=null&&props.description.length>50?props.description.slice(0,50):props.title.slice(0,50)}...</span>
          <a href={`${props.url}`} className={`flex bg-gradient-to-b from-gray-400 to-gray-700 justify-center pt-3`}>
          <svg dataName="Layer 1"  className={`h-7 w-7`} id="Layer_1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><title/><path d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165Zm28.5-81.5-28.5,28L71.5,83a9.9,9.9,0,0,0-14,14L86,125.5a19.92,19.92,0,0,0,28.5,0L143,97a9.67,9.67,0,0,0,0-14C138.5,79.5,132,79.5,128.5,83.5Z"/></svg>
          </a>
      </div>
    </div>
  );
};
export default Items;
