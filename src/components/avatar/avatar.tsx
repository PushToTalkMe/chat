import React from "react";
import { AvatarProps } from "./avatar.props";
import styles from "./avatar.module.css";
import cn from "classnames";

export const Avatar = ({
  src,
  alt,
  size = "small",
  className,
  ...props
}: AvatarProps): JSX.Element => {
  return (
    <img
      src={src}
      alt={alt}
      className={cn(styles.avatar, className, {
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",
      })}
      {...props}
    ></img>
  );
};
