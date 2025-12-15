import React from "react";
import style from "./Button.module.css";

interface IButtonProps {
  children: string | React.ReactElement | Array<string | React.ReactElement>;
  onButtonClick?: () => void;
  bgColor?: string;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  children,
  bgColor = "yellow",
  type = "button",
  onButtonClick,
}: IButtonProps) => {
  return (
    <button
      className={style.Button}
      type={type}
      style={{ backgroundColor: bgColor }}
      onClick={() => {
        if (onButtonClick) {
          onButtonClick();
        }
      }}
    >
      {children}
    </button>
  );
};

export default Button;
