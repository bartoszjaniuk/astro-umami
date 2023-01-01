import React from "react";
import { Container } from "../components/container/Container";
import { Calculator } from "../sections/calculator/Calculator";
import { Contact } from "../sections/contact/Contact";
import { Quote } from "../sections/quote/Quote";
import { Modal } from "../components/modal/Modal";
import { HowToWorkWithMe } from "../components/howToWorkWithMe/HowToWorkWithMe";
import { Offert } from "../components/offert/Offert";
import { ThreeMenus } from "../components/three-menus/ThreeMenus";
import { ModalProvider } from "../providers/ModalProvider";
import { Backdrop } from "../components/modal/Backdrop";
import { useModal } from "../hooks/useModal";
import { ModalWithBackdrop } from "../components/modal/ModalWithBackdrop";

export const HomeContainer = () => {
  return (
    <Container>
      <Offert />
      <Quote />
      <ThreeMenus />
      <HowToWorkWithMe />
      <Calculator />
      <Contact />
      <ModalWithBackdrop />
    </Container>
  );
};
