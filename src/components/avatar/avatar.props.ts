import { HTMLAttributes, DetailedHTMLProps } from "react";

export interface AvatarProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  src: string;
  alt: string;
  size?: "small" | "medium";
}
