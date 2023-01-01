import React from "react";
import type { AppProvidersProps } from "./AppProviders.types";
import { ModalProvider } from "./ModalProvider";

export const AppProviders = ({ children }: AppProvidersProps) => {
  return <ModalProvider>{children}</ModalProvider>;
};
