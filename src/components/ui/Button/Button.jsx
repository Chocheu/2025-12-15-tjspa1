import React from "react";
import './Button.css';

const Button = ({ title, onButtonClick }) => {
  console.log(title);
  return (
    <button
      className="Button"
      onClick={(event) => {
        onButtonClick("Nanère !");
      }}
    >
      {title}
    </button>
  );
};

export default Button;
