import Navbar from "./components/Navbar";
import BottomBar from "./components/BottomBar/BottomBar";
import React from 'react';
import "./css/styles.css"
import Home from "./components/pages/Home";
import Video from "./components/pages/Video";
import About from "./components/pages/About";
import { Route, Routes } from "react-router-dom";

function App() {
  
  
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/video" element={<Video />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </div>
    </>
  )
}

export default App;
