import React from "react";
import styles from "./index.module.css";

const Admin = () => {
  return (
    <div className={styles.container}>
      <div className={styles.manageUserSectionContainer}>
        <span className={styles.manageUserSectionContainer__text}>
          Manage user
        </span>
        <button>Student</button>
        <button>Teacher</button>
      </div>

      <button>Post announcement/Notice</button>
      <button>Timetable</button>
    </div>
  );
};

export default Admin;
