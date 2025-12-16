import React, { useEffect, useState } from "react";
import style from "./Button.module.css";

interface IButtonProps {
  children: React.ReactNode | Array<React.ReactNode>; // React.ReactNode replace string + ReactElement
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
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsClicked(false);
    }, 200);
  }, [isClicked]);

  return (
    <button
      className={`${style.Button}${isClicked ? ` ${style.clicked}` : ""}`}
      type={type}
      style={{ backgroundColor: bgColor }}
      onClick={() => {
        setIsClicked(true);
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
