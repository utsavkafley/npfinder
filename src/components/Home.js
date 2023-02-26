import React from "react";
import { Link } from "react-router-dom";
import splashBackground from "../images/splash-background.jpg";

const Home = () => {
  const backgroundStyle = {
    backgroundImage: `url(${splashBackground})`,
    backgroundSize: "cover",
    height: "100vh",
  };

  return (
    <div
      className="flex  flex-col text-white px-8 py-16 text-4xl justify-center lg:items-center"
      style={backgroundStyle}
    >
      <p className="w-full lg:w-1/2 drop-shadow-lg p-2 bg-dark bg-opacity-10">
        The United States has 63 national parks, they are designated for their
        natural beauty, unique geological features, diverse ecosystems, and
        recreational opportunities.
      </p>
      <Link
        to="/parks"
        className="drop-shadow-lg text-4xl mt-4 font-bold hover:text-primary hover:opacity-80"
      >
        Explore Now
      </Link>
    </div>
  );
};

export default Home;
