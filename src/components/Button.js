import React from "react";

const Button = ({text, classNames}) => (
  <button
    className={`${classNames} rounded`}
  >
    {text}
  </button>
);

export default Button;