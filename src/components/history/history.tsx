import { useEffect} from "react";
import { useDispatch } from "react-redux";
import styles from "./history.module.css";
import cn from "classnames";
import { HistoryProps } from "./history.props";
import { Message } from "..";
import { useTypedSelector } from "../../../hooks/use_typed_selector"; 

export const History = ({ className, ...props }: HistoryProps): JSX.Element => {
  const messages = useTypedSelector((state) => state.messagesReducer);
  const dispatch = useDispatch();
  const userJson = localStorage.getItem("user");
  const user = userJson !== null && JSON.parse(userJson);
  const getMessage = () => {
    let receiptId = 0;
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

            dispatch({ type: "ADD_MESSAGE_RECEIVED", payload: message });
          }
          fetch(
            `https://api.green-api.com/waInstance${user.idInstance}/deleteNotification/${user.apiTokenInstance}/${receiptId}`,
            {
              method: "DELETE",
            }
          );
        }
      });
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
          <Message key={message.id} text={message.text} time="12:32" reciever />
        ) : (
          <Message key={message.id} text={message.text} time="12:32" sender />
        );
      })}
    </div>
  );
};
