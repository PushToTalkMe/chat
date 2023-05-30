import { HTMLAttributes, DetailedHTMLProps } from "react";

export interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  avatar: string;
  name?: string;
  sidebar?: true | false;
}
