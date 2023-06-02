import {
  HTMLAttributes,
  DetailedHTMLProps,
  Dispatch,
  SetStateAction,
} from "react";

export interface AbonentProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  abonentActive: true | false;
  setAbonentActive: Dispatch<SetStateAction<boolean>>;
}
