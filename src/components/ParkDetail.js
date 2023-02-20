import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

const ParkDetail = () => {
  const parkCode = useParams().parkCode;
  const [park, setPark] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://developer.nps.gov/api/v1/parks?limit=1&parkCode=${parkCode}&api_key=3IvyBUoAFCni3kEsKBxi76jXRROgwyEBiTsPHzlk`
      )
      .then((response) => {
        setPark(response.data.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [parkCode]);

  if (park.length === 0) return <h1>Loading...</h1>;
  else
    return (
      <div className="flex flex-col">
        <Header />
        <div className="flex flex-col max-w-3xl m-32 gap-x-12 lg:flex-row xl:flex-row lg:mx-auto xl:mx-auto">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-dark mb-4">
              {park.fullName}
            </h1>
            <img
              src={park.images[0].url}
              alt="Arches National Park"
              className="w-full mb-4"
            />
            <div className="mb-4">
              <p className="text-dark">{park.description}</p>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-bold text-dark mb-2">Activities</h2>
            <ul className="flex flex-row flex-wrap">
              {park.activities.map((activity) => (
                <li
                  className="bg-secondary rounded-md mx-2 my-1 text-light px-2 py-1"
                  key={activity.id}
                >
                  {activity.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    );
};

export default ParkDetail;
