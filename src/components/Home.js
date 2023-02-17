import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

import Header from "./Header";
import Search from "./Search";
import Footer from "./Footer";
import Parks from "./Parks";

const Home = () => {
  const [state, setState] = useState("");
  const [parks, setParks] = useState([]);
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
  });

  return (
    <div>
      <Header />
      <Search onSearch={setState} />
      <Parks parks={parks} />
      <Footer />
    </div>
  );
};

export default Home;
