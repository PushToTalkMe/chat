import { HTMLAttributes, DetailedHTMLProps } from "react";

export interface MessageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  text: string;
  time: string;
  sender?: true | false;
  reciever?: true | false;
}
