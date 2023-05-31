import { useEffect, useState } from "react";
import styles from "./chat.module.css";
import cn from "classnames";
import { ChatProps } from "./chat.props";
import { Footer, Header, History } from "../index";

export const Chat = ({
  avatar,
  name,
  className,
  ...props
}: ChatProps): JSX.Element => {
  const [messages, setMessages] = useState([
    {
      type: "",
      id: "",
      text: "",
      sender: "",
      senderName: "",
    },
  ]);

  // const getMessages = () => {
  //   let receiptId = 0;
  //   const userJson = localStorage.getItem("user");
  //   const user = userJson !== null && JSON.parse(userJson);
  //   fetch(
  //     `https://api.green-api.com/waInstance${user.idInstance}/receiveNotification/${user.apiTokenInstance}`
  //   )
  //     .then((response) => response.json())
  //     .then((result) => {
  //       if (result !== null) {
  //         receiptId = result.receiptId;
  //         if (result.body.typeWebhook === "incomingMessageReceived") {
  //           const message = {
  //             type: result.body.typeWebhook,
  //             id: result.body.idMessage,
  //             text: result.body.messageData.textMessageData.textMessage,
  //             sender: result.body.senderData.sender,
  //             senderName: result.body.senderData.senderName,
  //           };
  //           setMessages([...messages, message]);
  //           // localStorage.setItem(
  //           //   "messages",
  //           //   JSON.stringify([...messages, message])
  //           // );
  //           console.log("set");
  //         }
  //         // fetch(
  //         //   `https://api.green-api.com/waInstance${user.idInstance}/deleteNotification/${user.apiTokenInstance}/${receiptId}`,
  //         //   {
  //         //     method: "DELETE",
  //         //   }
  //         // );
  //         // return;
  //       } else {
  //         return;
  //       }
  //     });
  // };

  // const timer = setInterval(getMessages, 5000);

  useEffect(() => {
    // timer;
    if (messages.length === 1) {
      const messagesJson = localStorage.getItem("messages");
      messagesJson !== null && setMessages(JSON.parse(messagesJson));
    }

    // return () => {
    //   clearInterval(timer);
    // };
  }, []);

  return (
    <div className={cn(styles.chat, className)} {...props}>
      <Header avatar={avatar} name={name}></Header>
      <History messages={messages} setMessages={setMessages}></History>
      <Footer></Footer>
    </div>
  );
};
