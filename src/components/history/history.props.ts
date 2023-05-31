import {
  HTMLAttributes,
  DetailedHTMLProps,
  Dispatch,
  SetStateAction,
} from "react";
import { IMessage } from "../../../interfaces/message.interface";

export interface HistoryProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  messages: IMessage[];
  setMessages: Dispatch<SetStateAction<IMessage[]>>;
}
