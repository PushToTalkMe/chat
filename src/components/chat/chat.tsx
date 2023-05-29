import React from "react";
import styles from "./chat.module.css";
import cn from "classnames";
import { ChatProps } from "./chat.props";
import { Header } from "../index";

export const Chat = ({
  avatar,
  name,
  className,
  ...props
}: ChatProps): JSX.Element => {
  return (
    <div className={cn(styles.chat, className)} {...props}>
      <Header avatar={avatar} name={name}></Header>
    </div>
  );
};
