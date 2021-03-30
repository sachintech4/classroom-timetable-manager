import styles from "./index.module.css";

const UserSelector = () => {
  return (
    <div className={styles.container}>
      <div className={styles.labelContainer}>
        <span className={styles.label}>Select user type</span>
      </div>

      <div className={styles.userButtonsContainer}>
        <div className={styles.userButtonContainer}>
          <button className="btn btn-primary">Admin</button>
        </div>
        <div className={styles.userButtonContainer}>
          <button className="btn btn-primary">Teacher</button>
        </div>
        <div className={styles.userButtonContainer}>
          <button className="btn btn-primary">Student</button>
        </div>
      </div>
    </div>
  );
};

export default UserSelector;
