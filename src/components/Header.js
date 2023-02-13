import React from "react";

const Header = () => {
  return (
      <header class="flex flex-col  px-24 justify-between lg:flex-row">
        <img
          src={require("../images/header-logo.png")}
          class="object-left sm:object-scale-down md:object-scale-down h-16 py-2"
          alt=""
        />
          <nav className=" flex font-montserrat text-xl items-end">
            <ul className="flex box-content justify-between items-center lg:items-end">
              <li className=" text-secondary hover:text-primary">
                <a href="#">
                  Home
                </a>
              </li>
              <li className="px-4  text-secondary hover:text-primary">
                <a href="#">
                  Explore
                </a>
              </li>
              <li className="text-secondary hover:text-primary"><a href="#">
                  Contact
                </a></li>
            </ul>
          </nav>
      </header>
  );
};

export default Header;
