import React from "react";
import { useModal } from "../../hooks/useModal";
import styles from "./Backdrop.styles.module.scss";

export const Backdrop = () => {
  const { isModalOpen, closeModal } = useModal();

  if (isModalOpen) {
    return <div className={styles.backdrop} onClick={closeModal}></div>;
  }

  return null;
};
