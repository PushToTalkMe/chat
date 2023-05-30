import { InputProps } from "./input.props";
import styles from "./input.module.css";
import cn from "classnames";

export const Input = ({ className, ...props }: InputProps): JSX.Element => {
  return (
    <input className={cn(styles.input, className)} {...props} type="text" />
  );
};
