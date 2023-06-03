import { useState } from "react";
import styles from "./footer.module.css";
import cn from "classnames";
import { FooterProps } from "./footer.props";
import { Input } from "..";
import { ReactComponent as SendIcon } from "../../../helpers/icons/send.svg";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/use_typed_selector";
import {format} from 'date-fns'

export const Footer = ({ className }: FooterProps): JSX.Element => {
  const abonent = useTypedSelector(state => state.abonentReducer)
  const user = useTypedSelector(state => state.userReducer)
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const sendMessage = (e: any) => {
    e.preventDefault();
    if (user.idInstance !== undefined) {
    fetch(
      `https://api.green-api.com/waInstance${user.idInstance}/sendMessage/${user.apiTokenInstance}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          chatId: `${abonent.number}@c.us`,
          message: `${text}`,
        }),
      }
    )
      .then((response) => response.json())
      .then((result) => {
        const currentTime = format(new Date(Date.now()), 'hh:mm');
        dispatch({
          type: "ADD_MESSAGE_SENDER",
          payload: {
            type: "outgoingMessageReceived",
            text: text,
            id: result.idMessage,
            time: currentTime
          },
        });
        setText("");
      })
    } else {
      alert('Сначала войдите под своими реквизитами: IdInstance и ApiToken')
    }
  };

  return (
    <form
      className={cn(styles.footer, className)}
      onSubmit={(e) => sendMessage(e)}
    >
      <Input
        placeholder="Введите сообщение..."
        value={text}
        onChange={(e) => {
          const target = e.target as HTMLTextAreaElement;
          setText(target.value);
        }}
      />
      <SendIcon className={styles.send} onClick={sendMessage} />
    </form>
  );
};
