import React from "react";
import { AuthProps } from "./components/auth/auth.props";

export const ActiveContext = React.createContext<AuthProps | null>(null);
