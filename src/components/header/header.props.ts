import { HTMLAttributes, DetailedHTMLProps } from "react";

export interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  avatar: string;
  sidebar?: true | false;
}
