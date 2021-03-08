import styles from "./App.module.css";
import Button from "./components/common/Button";
import Header from "./components/common/Header";

const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <h2>Classroom management system</h2>
      <h3>Select user type</h3>

      <div className={styles.userButtonsContainer}>
        <div className={styles.userButtonContainer}>
          <Button buttonText={"Admin"} />
        </div>
        <div className={styles.userButtonContainer}>
          <Button buttonText={"Teacher"} />
        </div>
        <div className={styles.userButtonContainer}>
          <Button buttonText={"Student"} />
        </div>
      </div>
    </div>
  );
};

export default App;
