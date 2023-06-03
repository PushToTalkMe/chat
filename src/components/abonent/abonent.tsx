import { useState } from "react";
import styles from "./abonent.module.css";
import cn from "classnames";
import { AbonentProps } from "./abonent.props";
import { Input, Button } from "..";
import {useDispatch} from 'react-redux'

export const Abonent = ({
  abonentActive,
  setAbonentActive,
  className,
  ...props
}: AbonentProps): JSX.Element => {
  const [abonent, setAbonent] = useState({
    number: "",
  });
  const dispatch = useDispatch()

  return (
    <div
      className={cn(styles.popup, {
        [styles.popupHidden]: abonentActive === false,
      })}
      onClick={() => setAbonentActive(false)}
    >
      <div
        className={cn(styles.auth, className)}
        {...props}
        onClick={(e) => e.stopPropagation()}
      >
        <Input
          placeholder="Введите номер телефона получателя (начиная с 7)"
          id="id"
          value={abonent.number}
          onChange={(e) => {
            const target = e.target as HTMLTextAreaElement;
            setAbonent({ ...abonent, number: target.value });
          }}
        />
        <Button
          className={styles.login}
          onClick={() => {
            dispatch({type: 'ADD_ABONENT', payload: abonent})
            setAbonentActive(false)
          }}
        >
          Начать чат
        </Button>
      </div>
    </div>
  );
};
