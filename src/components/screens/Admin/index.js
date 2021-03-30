import React from "react";
import styles from "./index.module.css";

const Admin = () => {
  return (
    <div className={styles.container}>
      <div className={styles.welcomeMsgContainer}>
        <span className={styles.welcomeMsg}>Welcome Admin</span>
      </div>

      <div className={styles.manageUserSectionContainer}>
        <span className={styles.manageUserSection__text}>Manage users</span>

        <button>Student</button>

        <button>Teacher</button>
      </div>

      <div className={styles.postButtonsContainer}>
        <button>Post announcement/notice</button>

        <button>Manage timetable</button>
      </div>
    </div>
  );
};

export default Admin;
