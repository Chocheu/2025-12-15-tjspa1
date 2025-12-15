import React from "react";
import style from "./Button.module.css";

const Button = ({ title, onButtonClick }) => {
  console.log(style);
  return (
    <button
      className={style.Button}
      onClick={(event) => {
        onButtonClick("Nanère !");
      }}
    >
      {title}
    </button>
  );
};

export default Button;
