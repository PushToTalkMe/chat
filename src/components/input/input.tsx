import { InputProps } from "./input.props";
import styles from "./input.module.css";
import cn from "classnames";

export const Input = ({
  value,
  className,
  ...props
}: InputProps): JSX.Element => {
  return (
    <input
      value={value}
      className={cn(styles.input, className)}
      {...props}
      type="text"
    />
  );
};
