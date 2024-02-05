import React from "react";

const Items = (props) => {
  const tt = (props.title.length>=40?props.title.slice(0,40):props.title.padEnd(40));
  const dd = props.description!=null&&props.description.length>50?props.description.slice(0,50):props.description.padEnd(50);
  return (
    <div className={`z-1`}>
      <div href={`${props.url}`} className={`mt-4 mb-4 h-100 w-60 ${props.view=="hidden"?"overflow-hidden":"overflow-auto"} bg-white shadow-2xl rounded-lg hover:scale-110`}>
          <img src={props.image} className={`h-40 w-60 rounded-t-lg`} alt="Image"/>
          <h4 className={`text-black font-bold cursor-default`}>{tt}...</h4>
          <span className={`overflow-hidden bg-gradient-to-b rounded-b-lg cursor-default from-white to-gray-400 block`}>{dd}...</span>
      </div>
    </div>
  );
};
export default Items;
