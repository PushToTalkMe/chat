import styles from "./chat.module.css";
import cn from "classnames";
import { ChatProps } from "./chat.props";
import { Footer, Header, History } from "../index";
import { useEffect } from "react";

export const Chat = ({
  avatar,
  className,
  ...props
}: ChatProps): JSX.Element => {
  return (
    <div className={cn(styles.chat, className)} {...props}>
      <Header avatar={avatar}></Header>
      <History></History>
      <Footer></Footer>
    </div>
  );
};
