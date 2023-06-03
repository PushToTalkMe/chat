import { useState } from "react";
import styles from "./auth.module.css";
import cn from "classnames";
import { AuthProps } from "./auth.props";
import { Input, Button } from "..";
import { IUser } from "../../../interfaces/user.interface";

export const Auth = ({
  active,
  setActive,
  className,
  ...props
}: AuthProps): JSX.Element => {
  const [user, setUser] = useState<IUser>({
    idInstance: "",
    apiTokenInstance: "",
  });

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
        <Input
          placeholder="Введите IdInstance"
          id="id"
          value={user.idInstance}
          onChange={(e) => {
            const target = e.target as HTMLTextAreaElement;
            setUser({ ...user, idInstance: target.value });
          }}
        />
        <Input
          placeholder="Введите ApiTokenInstance"
          id="token"
          value={user.apiTokenInstance}
          onChange={(e) => {
            const target = e.target as HTMLTextAreaElement;
            setUser({ ...user, apiTokenInstance: target.value });
          }}
        />
        <Button
          className={styles.login}
          onClick={() => {
            fetch(
              `https://api.green-api.com/waInstance${user.idInstance}/getSettings/${user.apiTokenInstance}`
            )
              .then((response) => response.json())
              .then(() => {
                setActive(false);
                localStorage.setItem("user", JSON.stringify(user));
              })
              .catch((error) => console.log(error));
          }}
        >
          Войти
        </Button>
      </div>
    </div>
  );
};
