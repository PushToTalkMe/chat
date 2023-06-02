import { useState, useEffect } from "react";
import styles from "./app.module.css";
import { Sidebar, Chat } from "./components";
import EmptyAvatar from "../helpers/icons/empty_avatar.svg";
import { Auth } from "./components/index";
import { ActiveContext } from "./context";
import { Abonent } from "./components/index";

export function App() {
  const [active, setActive] = useState(false);
  const [abonentActive, setAbonentActive] = useState(false);
  useEffect(() => {
    const userJson = localStorage.getItem("user");
    userJson === null && setActive(true);
  }, []);

  return (
    <div className={styles.app}>
      <ActiveContext.Provider value={{ active, setActive, abonentActive, setAbonentActive }}>
          <Sidebar avatar={EmptyAvatar} />
      </ActiveContext.Provider>
      <Chat avatar={EmptyAvatar}  />
      <Auth active={active} setActive={setActive} />
      <Abonent abonentActive={abonentActive} setAbonentActive={setAbonentActive}></Abonent>
    </div>
  );
}
