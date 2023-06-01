import { useState } from "react";
import styles from "./footer.module.css";
import cn from "classnames";
import { FooterProps } from "./footer.props";
import { Input } from "..";
import { ReactComponent as SendIcon } from "../../../helpers/icons/send.svg";
import { useDispatch } from "react-redux";

export const Footer = ({ className }: FooterProps): JSX.Element => {
  const [text, setText] = useState("");
  const userJson = localStorage.getItem("user");
  const user = userJson !== null && JSON.parse(userJson);
  const dispatch = useDispatch();

  const sendMessage = (e) => {
    e.preventDefault();
    fetch(
      `https://api.green-api.com/waInstance${user.idInstance}/sendMessage/${user.apiTokenInstance}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          chatId: "79993604361@c.us",
          message: `${text}`,
        }),
      }
    )
      .then((response) => response.json())
      .then((result) => {
        dispatch({
          type: "ADD_MESSAGE_SENDER",
          payload: {
            type: "outgoingMessageReceived",
            text: text,
            id: result.idMessage,
          },
        });
        setText("");
      });
  };

  return (
    <form
      className={cn(styles.footer, className)}
      onSubmit={(e) => sendMessage(e)}
    >
      <Input
        placeholder="Введите сообщение"
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
