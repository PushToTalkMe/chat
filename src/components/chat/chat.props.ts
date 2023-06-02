import { HTMLAttributes, DetailedHTMLProps } from "react";

export interface ChatProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  avatar: string;
}
