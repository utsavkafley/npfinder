import React from "react";

const Button = ({ text, classNames, onClick }) => (
  <button onClick={onClick} className={`${classNames} rounded`}>
    {text}
  </button>
);

export default Button;
