import { createContext } from "react";
import type { ModalContextProps } from "./ModalContext.types";

export const ModalContext = createContext<ModalContextProps | undefined>(
  undefined
);
