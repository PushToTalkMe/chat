import React from "react";
import styles from "./sidebar.module.css";
import { Header } from "../index";
import EmptyAvatar from "../../../helpers/icons/empty_avatar.svg";

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Header avatar={EmptyAvatar} sidebar></Header>
      <div className={styles.search}></div>
      <div className={styles.card}></div>
    </div>
  );
};
