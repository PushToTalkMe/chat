import styles from "./card.module.css";
import { CardProps } from "./card.props";
import cn from "classnames";
import { Avatar, Htag, Span } from "..";

export const Card = ({
  avatar,
  name,
  lastMessage,
  dateLastMessage,
  className,
  ...props
}: CardProps): JSX.Element => {
  return (
    <div className={cn(styles.card, className)} {...props}>
      <Avatar src={avatar} alt={name} size="medium" />
      <div className={styles.header}>
        <Htag tag="h5">{name}</Htag>
        <Span ghost>{dateLastMessage}</Span>
        <Span ghost>{lastMessage}</Span>
      </div>
    </div>
  );
};
