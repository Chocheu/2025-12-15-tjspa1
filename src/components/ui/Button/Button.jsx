import React from "react";
import style from "./Button.module.css";

const Button = ({ onButtonClick, bgColor = "yellowgreen", children }) => {
  console.log(style);
  return (
    <button
      className={style.Button}
      style={{ backgroundColor: bgColor }}
      onClick={(event) => {
        onButtonClick("Nananère !");
      }}
    >
      {children}
    </button>
  );
};

export default Button;
