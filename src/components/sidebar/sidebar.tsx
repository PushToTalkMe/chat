import React from "react";
import styles from "./sidebar.module.css";
import cn from "classnames";
import { SidebarProps } from "./sidebar.props";
import { Card, Header } from "../index";

export const Sidebar = ({
  avatar,
  className,
  ...props
}: SidebarProps): JSX.Element => {
  return (
    <div className={cn(styles.sidebar, className)} {...props}>
      <Header avatar={avatar} sidebar></Header>
      {/* <Card
        avatar={EmptyAvatar}
        name="79993604361"
        lastMessage="hПожалуйста"
        dateLastMessage="14.08.2023"
      /> */}
    </div>
  );
};
