import React, { useEffect, useState } from "react";
import styles from "./FlexV1Grow.module.css";

interface IFlexV1GrowProps {
  children?: React.ReactNode;
  parentStyle?: React.CSSProperties;
}

const FlexV1Grow: React.FC<IFlexV1GrowProps> = ({
  children = "FlexV1Grow Component",
  parentStyle,
}) => {
  return (
    <div
      className={styles.FlexV1Grow}
      style={parentStyle}
      data-testid="FlexV1Grow"
    >
      {children}
    </div>
  );
};

export default FlexV1Grow;
