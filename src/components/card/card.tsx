import React from "react";
import styles from "./card.module.css";
import { CardProps } from "./card.props";
import cn from "classnames";
import { Avatar } from "..";

export const Card = ({
  avatar,
  name,
  className,
  ...props
}: CardProps): JSX.Element => {
  return (
    <div className={cn(styles.card, className)} {...props}>
      <Avatar src={avatar} alt={name} size="medium" />
    </div>
  );
};
