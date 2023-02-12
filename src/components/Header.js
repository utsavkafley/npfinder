import React from "react";

const Header = () => {
  return (
    <header className="text-3xl font-bold underline">
      <img
        className="App-logo"
        src={require("../images/logo.png")}
        alt="Logo"
      />
    </header>
  );
};

export default Header;
