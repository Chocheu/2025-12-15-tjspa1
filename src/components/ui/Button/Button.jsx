import React from "react";

const Button = ({ title }) => {
  console.log(title);
  return <button className="Button">{title}</button>;
};

export default Button;
