import React from "react";
import { Container } from "../components/container/Container";
import { ModalWithBackdrop } from "../components/modal/ModalWithBackdrop";
import { DietsPage } from "../sections/diets/DietsPage";

export const DietsContainer = () => {
  return (
    <Container>
      <DietsPage />
      <ModalWithBackdrop />
    </Container>
  );
};
