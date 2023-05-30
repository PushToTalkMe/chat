import styles from "./app.module.css";
import { Sidebar, Chat } from "./components";
import EmptyAvatar from "../helpers/icons/empty_avatar.svg";

export function App() {
  return (
    <div className={styles.app}>
      <Sidebar avatar={EmptyAvatar}></Sidebar>
      <Chat avatar={EmptyAvatar} name={"Имя чата"}></Chat>
    </div>
  );
}
