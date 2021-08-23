import React from "react";
import styles from "./Button.module.scss";

const Button = (props: any) => {
  return (
    <div className={styles.button}>
      <span style={{ color: props.color }}>{props.text}</span>
    </div>
  );
};

export default Button;
