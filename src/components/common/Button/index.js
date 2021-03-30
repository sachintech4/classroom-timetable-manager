import React from "react";
import styles from "./index.module.css";

const Button = (props) => {

  return (
    <div className={styles.container}>
      <button className={styles.button}>{props.buttonText}</button>
    </div>
  );
};

export default Button;
