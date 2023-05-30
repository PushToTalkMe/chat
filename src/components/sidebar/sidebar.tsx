import React from "react";
import styles from "./sidebar.module.css";
import cn from "classnames";
import { SidebarProps } from "./sidebar.props";
import { Card, Header } from "../index";
import EmptyAvatar from "../../../helpers/icons/empty_avatar.svg";

export const Sidebar = ({
  avatar,
  className,
  ...props
}: SidebarProps): JSX.Element => {
  return (
    <div className={cn(styles.sidebar, className)} {...props}>
      <Header avatar={avatar} sidebar></Header>
      {/* <div className={styles.search}></div> */}
      <Card
        avatar={EmptyAvatar}
        name="Настя"
        lastMessage="Пожалуйста"
        dateLastMessage="14.08.2023"
      />
    </div>
  );
};
