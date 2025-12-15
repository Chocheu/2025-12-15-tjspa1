import React from "react";
import style from "./Button.module.css";

const Button = ({ title, onButtonClick, bgColor }) => {
  console.log(style);
  return (
    <button
      className={style.Button}
      style={{ backgroundColor: bgColor }}
      onClick={(event) => {
        onButtonClick("Nananère !");
      }}
    >
      {title}
    </button>
  );
};

export default Button;
