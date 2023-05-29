import styles from "./app.module.css";
import { Sidebar, Chat } from "./components";
import EmptyAvatar from "../helpers/icons/empty_avatar.svg";

export function App() {
  return (
    <div className={styles.app}>
      <Sidebar avatar={EmptyAvatar}></Sidebar>
      <Chat avatar={EmptyAvatar} name={"Имя чата"}></Chat>
      {/* <div className={styles.main}>
        <div className={styles.header2}></div>
        <div className={styles.message}></div>
      </div> */}
    </div>
  );
}
