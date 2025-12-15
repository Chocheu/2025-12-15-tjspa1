import React, { useEffect, useState } from "react";
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
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    console.log('button is totally cliked !', isClicked);
  }, [isClicked])

  return (
    <button
      className={style.Button}
      type={type}
      style={{ backgroundColor: bgColor }}
      onClick={() => {
        setIsClicked(true);
        if (onButtonClick) {
          onButtonClick();
        }
      }}
    >
      {children}<br/>
      {isClicked.toString()}
    </button>
  );
};

export default Button;
