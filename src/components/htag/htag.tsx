import { HtagProps } from "./htag.props";
import styles from "./htag.module.css";
import cn from "classnames";

export const Htag = ({ tag, children, className }: HtagProps): JSX.Element => {
  switch (tag) {
    case "h4":
      return <h4 className={cn(styles.h4, className)}>{children}</h4>;
    case "h5":
      return <h5 className={cn(styles.h5, className)}>{children}</h5>;

    default:
      return <></>;
  }
};
