import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import Parks from "./components/Parks";
import ParkDetail from "./components/ParkDetail";
import Home from "./components/Home";
import Contact from "./components/Contact";

function App() {
  const [parks, setParks] = useState([]);
  const [state, setState] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://developer.nps.gov/api/v1/parks?limit=500&stateCode=${state}&api_key=3IvyBUoAFCni3kEsKBxi76jXRROgwyEBiTsPHzlk`
      )
      .then((response) => {
        setParks(
          response.data.data.filter((park) => {
            if (state === "") return park.designation === "National Park";
            else return true;
          })
        );
      });
  }, [state]);
  return (
    <Router>
      <Routes>
        <Route path="parkDetail/:parkCode" element={<ParkDetail />} />
        <Route path="/parks" element={<Parks parks={parks} />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
