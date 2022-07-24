import React, { useState,useEffect } from 'react';
import "./App.css";
import Navbarsm from "./components/Navbarsm"
import Navbar from "./components/Navbar"
import Main_body from './components/Main_body';
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Switch, Link, Route } from "react-router-dom";
function App() {
  const [pageNo, setpageNo] = useState(1);
  const [view, setview] = useState("flex-row")
  const [category, setcategory] = useState("General");
  return (
    <Router>
    <Navbarsm cview={setview}/>
    <Navbar category={category}/>
    <Routes>
        <Route 
          path="/"
          element={<Main_body view={view}  incPage={setpageNo} pageNo={pageNo} category="General"/>}
        />
        <Route 
          path="/Entertainment"
          element={<Main_body view={view}  incPage={setpageNo} pageNo={pageNo} category="Entertainment"/>}
        />
        <Route 
          path="/Health"
          element={<Main_body view={view}  incPage={setpageNo} pageNo={pageNo} category="Health"/>}
        />
        <Route 
          path="/Sports"
          element={<Main_body view={view}  incPage={setpageNo} pageNo={pageNo} category="Sports"/>}
        />
        <Route 
          path="/Science"
          element={<Main_body view={view}  incPage={setpageNo} pageNo={pageNo} category="Science"/>}
        />
        <Route 
          path="/Technology"
          element={<Main_body view={view}  incPage={setpageNo} pageNo={pageNo} category="Technology"/>}
        />
        <Route 
          path="/Business"
          element={<Main_body view={view}  incPage={setpageNo} pageNo={pageNo} category="Business"/>}
        />
    </Routes>
    </Router>
  );
}

export default App;
