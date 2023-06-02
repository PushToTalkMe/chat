import { useContext } from "react";
import { AvatarProps } from "./avatar.props";
import styles from "./avatar.module.css";
import cn from "classnames";
import { ActiveContext } from "../../context";

export const Avatar = ({
  src,
  alt,
  size = "small",
  hidden,
  className,
  ...props
}: AvatarProps): JSX.Element => {
  const value = useContext(ActiveContext);
  return (
    <img
      src={src}
      alt={alt}
      className={cn(styles.avatar, className, {
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",
        [styles.hidden]: hidden === true,
      })}
      onClick={() => value?.setActive(true)}
      {...props}
    />
  );
};
