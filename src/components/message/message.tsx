import React from "react";
import styles from "./message.module.css";
import cn from "classnames";
import { MessageProps } from "./message.props";
import { Span } from "..";

export const Message = ({
  text,
  time,
  className,
  sender,
  ...props
}: MessageProps): JSX.Element => {
  return (
    <div
      className={cn(styles.message, className, {
        [styles.sender]: sender === true,
      })}
      {...props}
    >
      <Span className={styles.text}>{text}</Span>
      <Span className={styles.time} ghost>
        {time}
      </Span>
    </div>
  );
};
