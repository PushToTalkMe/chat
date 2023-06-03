import { useEffect} from "react";
import { useDispatch } from "react-redux";
import styles from "./history.module.css";
import cn from "classnames";
import { HistoryProps } from "./history.props";
import { Message } from "..";
import { useTypedSelector } from "../../../hooks/use_typed_selector"; 
import {format} from 'date-fns'

export const History = ({ className, ...props }: HistoryProps): JSX.Element => {
  const messages = useTypedSelector((state) => state.messagesReducer);
  const user = useTypedSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  
  const getMessage = () => {
    let receiptId = 0;
    if (user.idInstance !== undefined) {
    fetch(
      `https://api.green-api.com/waInstance${user.idInstance}/receiveNotification/${user.apiTokenInstance}`
    )
      .then((response) => response.json())
      .then((result) => {
        if (result !== null) {
          const currentTime = format(new Date(Date.now()), 'hh:mm');
          receiptId = result.receiptId;
          if (result.body.typeWebhook === "incomingMessageReceived") {
            const message = {
              type: result.body.typeWebhook,
              id: result.body.idMessage,
              text: result.body.messageData.textMessageData.textMessage,
              sender: result.body.senderData.sender,
              senderName: result.body.senderData.senderName,
              time: currentTime
            };
            dispatch({ type: "ADD_MESSAGE_RECEIVED", payload: message });
          }
          fetch(
            `https://api.green-api.com/waInstance${user.idInstance}/deleteNotification/${user.apiTokenInstance}/${receiptId}`,
            {
              method: "DELETE",
            }
          );
        }
      })
    }
  }

  const timer = setInterval(getMessage, 5000);

  useEffect(() => {
    timer;
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={cn(styles.history, className)} {...props}>
      {messages.map((message) => {
        return message.type === "incomingMessageReceived" ? (
          <Message key={message.id} text={message.text} time={message.time} reciever />
        ) : (
          <Message key={message.id} text={message.text} time={message.time} sender />
        );
      })}
    </div>
  );
};
