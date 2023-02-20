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
    <div className="text-white px-16 py-16 text-4xl" style={backgroundStyle}>
      <p className="w-2/3 drop-shadow-lg">
        The United States has 63 national parks, they are designated for their
        natural beauty, unique geological features, diverse ecosystems, and
        recreational opportunities.
      </p>
      <Link
        to="/parks"
        className="drop-shadow-lg text-6xl font-bold hover:text-primary hover:opacity-80"
      >
        Explore Now
      </Link>
    </div>
  );
};

export default Home;
