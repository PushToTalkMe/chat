import React from "react";
import styles from "./header.module.css";
import cn from "classnames";
import { HeaderProps } from "./header.props";
import { Avatar, Htag } from "../index";
import { ReactComponent as Glass } from "../../../helpers/icons/glass.svg";
import { ReactComponent as NewChat } from "../../../helpers/icons/add.svg";
import { ReactComponent as Option } from "../../../helpers/icons/option.svg";

export const Header = ({
  avatar,
  name,
  sidebar,
  className,
  ...props
}: HeaderProps): JSX.Element => {
  return (
    <div
      className={cn(styles.header, className, {
        [styles.sidebar]: sidebar === true,
      })}
      {...props}
    >
      <Avatar src={avatar} alt="Аватар" />
      {sidebar ? null : (
        <Htag tag="h4" className={styles.name}>
          {name}
        </Htag>
      )}
      {sidebar ? null : <Glass className={styles.glass} />}
      {sidebar ? <NewChat className={styles.newChat} /> : null}
      <Option className={styles.option} />
    </div>
  );
};
