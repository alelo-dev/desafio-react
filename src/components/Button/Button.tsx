import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  color: string;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ color, text }) => {
  return (
    <div className={styles.button}>
      <span style={{ color }}>{text}</span>
    </div>
  );
};

export default Button;