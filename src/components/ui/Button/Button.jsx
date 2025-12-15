import React from "react";

const Button = ({ title, onButtonClick }) => {
  console.log(title);
  return (
    <div
      className="Button"
      onClick={(event) => {
        onButtonClick("Nanère !");
      }}
    >
      {title}
    </div>
  );
};

export default Button;
