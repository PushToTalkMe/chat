import React from "react";
import styles from "./history.module.css";
import cn from "classnames";
import { HistoryProps } from "./history.props";

export const History = ({
  messages,
  className,
  ...props
}: HistoryProps): JSX.Element => {
  return <div className={cn(styles.history, className)} {...props}></div>;
};
