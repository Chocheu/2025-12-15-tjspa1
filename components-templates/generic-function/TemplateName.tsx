import React from "react";
import styles from "./TemplateName.module.css";

interface ITemplateNameProps {
  children?: React.ReactNode;
  parentStyle?: React.CSSProperties;
}

const TemplateName: React.FC<ITemplateNameProps> = ({
  children = "TemplateName Component",
  parentStyle,
}) => {
  return (
    <div
      className={styles.TemplateName}
      style={parentStyle}
      data-testid="TemplateName"
    >
      {children}
    </div>
  );
};

export default TemplateName;
