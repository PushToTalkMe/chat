import { Dispatch, SetStateAction } from "react";

export interface ActiveProps {
  active: true | false;
  setActive: Dispatch<SetStateAction<boolean>>;
}
