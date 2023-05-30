import React from "react";
import styles from "./footer.module.css";
import cn from "classnames";
import { FooterProps } from "./footer.props";
import { Input } from "..";
import { ReactComponent as SendIcon } from "../../../helpers/icons/send.svg";

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <div className={cn(styles.footer, className)} {...props}>
      <Input />
      <SendIcon className={styles.send} />
    </div>
  );
};
