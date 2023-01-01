import { useState } from "react";
import { ModalContext } from "../context/ModalContext";
import type { ModalProviderProps } from "./ModalProvider.types";

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [diet, setDiet] = useState<string | undefined>(undefined);

  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);

  return (
    <ModalContext.Provider
      value={{ isModalOpen, closeModal, openModal, chooseDiet: setDiet, diet }}
    >
      {children}
    </ModalContext.Provider>
  );
};
