import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Parks = ({ parks }) => {
  if (!parks) return <h1>Loading...</h1>;
  return (
    <div className="flex flex-col bg-light text-dark font-open-sans items-center">
      <Header />
      <ul className="mb-12 px-8 grid grid-flow-row grid-cols-1 gap-12 justify-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:w-3/4 2xl:w-1/2">
        {parks.map((park) => (
          <li
            className="flex flex-col rounded-lg  hover:shadow-xl shadow-md hover:cursor-pointer"
            key={park.id}
          >
            <Link to={`/parkDetail/${park.parkCode}`}>
              <img
                className="object-cover h-48  w-full rounded-t"
                src={park.images[0].url}
                alt={park.images[0].title}
              />
              <p className="p-4 pl-4 hover:text-primary hover:font-medium transition ease-in-out duration-400">
                {park.fullName}
              </p>
            </Link>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
};

export default Parks;
