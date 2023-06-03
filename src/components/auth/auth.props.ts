import {
  HTMLAttributes,
  DetailedHTMLProps,
  Dispatch,
  SetStateAction,
} from "react";

export interface AuthProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  active: true | false;
  setActive: Dispatch<SetStateAction<boolean>>;
}
