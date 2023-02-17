import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Parks from "./components/Parks";
import ParkDetail from "./components/ParkDetail";
import Home from "./components/Home";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="parkDetail/:parkCode" element={<ParkDetail />} />
        <Route path="/parks/:stateCode" element={<Parks />} />
        <Route path="/parks" element={<Parks />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
