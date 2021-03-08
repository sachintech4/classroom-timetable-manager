import styles from "./App.module.css";
import Button from "./components/common/Button";

const App = () => {
  return (
    <div className={styles.App}>
      <h1>Thakur college of science and commerce</h1>
      <h2>Classroom management system</h2>
      <h3>Select user type</h3>
      <Button buttonText={"Admin"}/>
      <Button buttonText={"Teacher"}/>
      <Button buttonText={"Student"}/>
    </div>
  );
};

export default App;
