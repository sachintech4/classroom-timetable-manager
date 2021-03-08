import React from "react";
import styles from "./index.module.css";
import logo from "../../../assets/logo/tcsc_logo.png";

const Header = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="College logo" className={styles.logo} />
      <h1>Thakur college of science and commerce</h1>
    </div>
  );
};

export default Header;
