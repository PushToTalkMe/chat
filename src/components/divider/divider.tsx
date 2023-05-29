import styles from "./divider.module.css";
import { ParagraphProps } from "./divider.props";
import cn from "classnames";

export const Divider = ({
  className,
  ...props
}: ParagraphProps): JSX.Element => {
  return <hr className={cn(className, styles.hr)} {...props} />;
};
