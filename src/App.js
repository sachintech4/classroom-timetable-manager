import styles from "./App.module.css";
import Header from "./components/common/Header";
import UserSelector from "./components/UserSelector";

const App = () => {
  return (
    <div className={styles.App}>
      <Header />

      <div className={styles.labelContainer}>
        <span>Classroom management system</span>
      </div>

      <UserSelector />
    </div>
  );
};

export default App;
