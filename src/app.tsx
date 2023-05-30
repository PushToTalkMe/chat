import { useState, useEffect } from "react";
import styles from "./app.module.css";
import { Sidebar, Chat } from "./components";
import EmptyAvatar from "../helpers/icons/empty_avatar.svg";
import { Auth } from "./components/index";
import { ActiveContext } from "./context";

export function App() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const userJson = localStorage.getItem("user");
    userJson === null && setActive(true);
  });

  return (
    <div className={styles.app}>
      <ActiveContext.Provider value={{ active, setActive }}>
        <Sidebar avatar={EmptyAvatar} />
      </ActiveContext.Provider>
      <Chat avatar={EmptyAvatar} name={"Имя чата"} />
      <Auth active={active} setActive={setActive} />
    </div>
  );
}
