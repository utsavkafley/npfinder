import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex flex-col  px-24 justify-between lg:flex-row">
      <img
        src={require("../images/header-logo.png")}
        className="object-left sm:object-scale-down md:object-scale-down h-16 py-2"
        alt=""
      />
      <nav className=" flex font-montserrat text-xl items-end">
        <ul className="flex box-content justify-between items-center lg:items-end">
          <li className=" text-secondary hover:text-primary">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4  text-secondary hover:text-primary">
            <Link to="/about">Explore</Link>
          </li>
          <li className="text-secondary hover:text-primary">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
