import { HTMLAttributes, DetailedHTMLProps } from "react";

export interface HistoryProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  messages?: string[];
}
