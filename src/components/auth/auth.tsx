import React from "react";
import styles from "./auth.module.css";
import cn from "classnames";
import { AuthProps } from "./auth.props";
import { Input, Button } from "..";

export const Auth = ({
  active,
  setActive,
  className,
  ...props
}: AuthProps): JSX.Element => {
  return (
    <div
      className={cn(styles.popup, {
        [styles.popupHidden]: active === false,
      })}
      onClick={() => setActive(false)}
    >
      <div
        className={cn(styles.auth, className)}
        {...props}
        onClick={(e) => e.stopPropagation()}
      >
        <Input placeholder="Введите idInstance" id="id"></Input>
        <Input placeholder="Введите apiTokenInstance" id="token"></Input>
        <Button className={styles.login}>Войти</Button>
      </div>
    </div>
  );
};
