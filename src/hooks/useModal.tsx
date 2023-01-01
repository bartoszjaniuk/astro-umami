import { useContext } from "react";

import { ModalContext } from "../context/ModalContext";

export const useModal = () => {
  const context = useContext(ModalContext);

  if (context === undefined) {
    throw new Error(
      "ModalContext is unavailable, make sure you are using ModalProvider"
    );
  }

  return context;
};
