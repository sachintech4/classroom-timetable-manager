import React from "react";
import styles from "./index.module.css";

const Teacher = () => {
  return (
    <div className={styles.container}>
      <div className={styles.welcomeMsgContainer}>
        <span className={styles.welcomeMsg}>Welcome Teacher</span>
      </div>

      <div className={styles.cardContainer}>
        <button>Notices</button>
        <button>Timetable</button>
        <button>Assignments</button>
        <button>Books</button>
      </div>
    </div>
  );
};

export default Teacher;
