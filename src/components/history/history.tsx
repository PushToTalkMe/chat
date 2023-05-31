import { useEffect, useState } from "react";
import styles from "./history.module.css";
import cn from "classnames";
import { HistoryProps } from "./history.props";
import { Message } from "..";

export const History = ({
  messages,
  setMessages,
  className,
  ...props
}: HistoryProps): JSX.Element => {
  useEffect(() => {
    let receiptId = 0;
    const userJson = localStorage.getItem("user");
    const user = userJson !== null && JSON.parse(userJson);
    fetch(
      `https://api.green-api.com/waInstance${user.idInstance}/receiveNotification/${user.apiTokenInstance}`
    )
      .then((response) => response.json())
      .then((result) => {
        if (result !== null) {
          receiptId = result.receiptId;
          if (result.body.typeWebhook === "incomingMessageReceived") {
            const message = {
              type: result.body.typeWebhook,
              id: result.body.idMessage,
              text: result.body.messageData.textMessageData.textMessage,
              sender: result.body.senderData.sender,
              senderName: result.body.senderData.senderName,
            };
            setMessages([...messages, message]);
            localStorage.setItem(
              "messages",
              JSON.stringify([...messages, message])
            );
            console.log("set");
          }
          fetch(
            `https://api.green-api.com/waInstance${user.idInstance}/deleteNotification/${user.apiTokenInstance}/${receiptId}`,
            {
              method: "DELETE",
            }
          );
        }
      });
  });

  return (
    <div className={cn(styles.history, className)} {...props}>
      {messages.map((message, ind) => {
        if (ind > 0) {
          return message.type === "incomingMessageReceived" ? (
            <Message
              key={message.id}
              text={message.text}
              time="12:32"
              reciever
            />
          ) : (
            <Message key={message.id} text={message.text} time="12:32" sender />
          );
        }
      })}
    </div>
  );
};
