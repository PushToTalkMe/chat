import { HTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface HtagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  tag: "h4" | "h5";
  children: ReactNode;
}
