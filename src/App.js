import React, { useState,useEffect } from 'react';
import "./App.css";
import Navbarsm from "./components/Navbarsm"
import Navbar from "./components/Navbar"
import Main_body from './components/Main_body';
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Switch, Link, Route } from "react-router-dom";
function App() {
  const [view, setview] = useState("flex-row")
  const [category, setcategory] = useState("general");
  console.log("parent");
  return (
    <Router>
    <Navbarsm category={category} ccat = {setcategory} view = {view} cview = {setview}/>
    <Navbar category={category} ccat = {setcategory}/>
    <Routes>
        <Route 
          path="/"
          element={<Main_body view={view}  category = {category}/>}
        />
        <Route 
          path="/Entertainment"
          element={<Main_body view={view}  category = {category}/>}
        />
        <Route 
          path="/Health"
          element={<Main_body view={view} category = {category}/>}
        />
        <Route 
          path="/Sports"
          element={<Main_body view={view} category = {category}/>}
        />
        <Route 
          path="/Science"
          element={<Main_body view={view} category = {category}/>}
        />
        <Route 
          path="/Technology"
          element={<Main_body view={view} category = {category}/>}
        />
        <Route 
          path="/Business"
          element={<Main_body view={view} category = {category}/>}
        />
    </Routes>
    </Router>
  );
}

export default App;
