import React from "react";
import styles from "./history.module.css";
import cn from "classnames";
import { HistoryProps } from "./history.props";
import { Message } from "..";

export const History = ({
  messages,
  className,
  ...props
}: HistoryProps): JSX.Element => {
  return (
    <div className={cn(styles.history, className)} {...props}>
      <Message
        text="Привет, как дела asd as d asd asd asd asd asdsa dasd asd  "
        time="12:32"
      />
      <Message
        text="Привет, как дела asd asdas dasd asd asd asd asd asd s asd asd asd asdas asd sa"
        time="12:34"
        sender
      />
    </div>
  );
};
