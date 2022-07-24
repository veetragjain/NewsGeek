import React, { useEffect, useState } from "react";
import Items from "./Items";

export default function Main_body(props) {
  let prev = "<- Prev";let next = "Next ->";const ApiKey = process.env.REACT_APP_API_KEY;
  const [articles, setarticles] = useState([]);
  const [results, setresults] = useState(0);
  const [prevcat, setprevcat] = useState(props.category)
  const [nxtbtn, setnxtbtn] = useState(1);
  const [prvbtn, setprvbtn] = useState(0);
  async function fetchNews(){
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&language=en&apiKey=${ApiKey}&page=${props.pageNo}&pageSize=15`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setresults(Math.ceil((parsedData.totalResults/15)));
    setarticles(parsedData.articles);
  }
  useEffect(()=>{
    let cat = props.category
    if(cat==prevcat){
      fetchNews();
      window.scroll({top: 0,left: 0, behavior: 'smooth'});
    }
    else{
      props.incPage(1);setprevcat(cat);
      setprvbtn(0);setnxtbtn(1);
    }
  },[props.category,props.pageNo,prevcat,props.view])
  const clickNext = () =>{
    let pageNumber = props.pageNo;
    let totRes = results;
    if(pageNumber+1<=totRes){
      pageNumber +=1;
      props.incPage(pageNumber);
      setprvbtn(1);
    }
    if(pageNumber==totRes){
      setnxtbtn(0);
    }
  }
  const clickPrev = () =>{
    let pageNum = props.pageNo
    if(pageNum-1>0){
      pageNum -=1
      props.incPage(pageNum);
      setnxtbtn(1);
    }
    if(pageNum==1){
      setprvbtn(0);
    }
  }
  return (
    <div className={`bg-gray-200`}>
      <div className={`text-center ${props.view=="hidden"?"hidden":"block"}`}>
        <h1 className={`inline-block font-semibold text-4xl text-transparent mb-3 mt-3 pb-2 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600`}>{props.category=="General"? "Home Page" :props.category+" - Top Headlines"}</h1>
      </div>
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center`}>
        {articles.map((element) => {
          return (
            <Items
              url={element.url}
              view={props.view}
              key={element.url}
              title={element.title}
              description={element.description}
              image={element.urlToImage}
              Url={element.url}
            />
          );
        })}
      </div>
      <div className={`${props.view!="hidden"?"flex":"hidden"} mt-4`}>
            <button onClick={clickPrev} className={`${prvbtn?"bg-black hover:scale-105":"bg-gray-700"} text-white p-2 ml-2 rounded-md`}>{prev}</button>
            <button onClick={clickNext} className={`ml-auto ${nxtbtn?"bg-black hover:scale-105":"bg-gray-700"} text-white p-2 rounded-md pl-4 pr-4 mr-2`}>{next}</button>
        </div>
    </div>
  );
}
