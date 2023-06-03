import { IMessage } from "../../../interfaces/message.interface";

const ADD_MESSAGE_RECEIVED = "ADD_MESSAGE_RECEIVED";
const ADD_MESSAGE_SENDER = "ADD_MESSAGE_SENDER";

interface MessagesAction {
  type: string;
  payload: IMessage;
}

const messagesJson = localStorage.getItem("messages");

const messages = messagesJson !== null ? JSON.parse(messagesJson) : [];

export const messagesReducer = (
  state: IMessage[] = messages,
  action: MessagesAction
) => {
  switch (action.type) {
    case ADD_MESSAGE_RECEIVED:
      if (!state.find(message => message.id === action.payload.id)) {
        state = [...state, action.payload];
      }
      localStorage.setItem("messages", JSON.stringify(state));
      return state;
    case ADD_MESSAGE_SENDER:
      if (!state.find(message => message.id === action.payload.id)) {
        state = [...state, action.payload];
      }
      localStorage.setItem("messages", JSON.stringify(state));
      return state;
    default:
      return state;
  }
};
