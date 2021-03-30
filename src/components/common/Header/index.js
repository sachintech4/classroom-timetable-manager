import React from "react";
import styles from "./index.module.css";
import logo from "assets/logo/tcsc_logo.png";

const Header = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="College logo" className={styles.logo} />
      <span>Thakur college of science and commerce</span>
    </div>
  );
};

export default Header;
