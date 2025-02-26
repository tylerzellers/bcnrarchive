import Navbar from "./components/Navbar";
import React from 'react';
import "./styles.css"
import Home from "./components/pages/Home";
import Photo from "./components/pages/Photo";
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
          <Route path="/photo" element={<Photo />}/>
          <Route path="/video" element={<Video />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </div>
    </>
  )
}

export default App;
