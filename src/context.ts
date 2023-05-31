import React from "react";
import { ActiveProps } from "../interfaces/active.interface";

export const ActiveContext = React.createContext<ActiveProps | null>(null);
