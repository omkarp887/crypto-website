import React from "react";

import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <>
    <Routes>
     <Route exact path="/contact" element={<Contact />}/>
     <Route exact path="/login" element={<Login/>}/>
     <Route exact path="/" element={<Home />}/>
     </Routes>
     
    </>
  )
}

export default App;
