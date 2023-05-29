import styles from "./app.module.css";
import { Sidebar } from "./components";

export function App() {
  return (
    <div className={styles.app}>
      <Sidebar></Sidebar>
      <Sidebar></Sidebar>

      {/* <div className={styles.main}>
        <div className={styles.header2}></div>
        <div className={styles.message}></div>
      </div> */}
    </div>
  );
}
