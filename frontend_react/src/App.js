import React from "react";
import { Routes, Route } from "react-router-dom";

import { Gallery } from "./container";
import { Home } from "../src/components";
import { Navbar } from "./components";
import "./fonts/OpenSans-Light.ttf";
import "./fonts/DancingScript-VariableFont_wght.ttf";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="section_container">
        <Routes>
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
