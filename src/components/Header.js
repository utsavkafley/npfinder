import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex flex-col w-full px-8 py-12 justify-between md:flex-row lg:flex-row md:justify-between md:w-3/4 2xl:w-1/2">
      <Link to="/">
        <img
          src={require("../images/header-logo.png")}
          className="object-left sm:object-scale-down md:object-scale-down h-16 py-2"
          alt=""
        />
      </Link>
      <nav className=" flex font-montserrat text-xl items-end">
        <ul className="flex box-content justify-between items-center lg:items-end">
          <li className=" text-secondary hover:text-primary">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4  text-secondary hover:text-primary">
            <Link to="/parks">Parks</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
