import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Parks = () => {
  const [parks, setParks] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://developer.nps.gov/api/v1/parks?stateCode=CO&api_key=3IvyBUoAFCni3kEsKBxi76jXRROgwyEBiTsPHzlk"
      )
      .then((response) => {
        console.log(response.data.data);
        setParks(
          response.data.data.filter(
            (park) => park.designation === "National Park"
          )
        );
      });
  }, []);
  return (
    <div>
      <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600">
        Parks
      </h1>
      <ul>
        {parks.map((park) => (
          <li key={park.id}>{park.fullName}</li>
        ))}
      </ul>
    </div>
  );
};

export default Parks;
