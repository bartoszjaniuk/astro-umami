import React from "react";
import styles from "./ThreeMenus.styles.module.scss";
import { FloatingCard } from "../floating-card/FloatingCard";
import {
  firstCard,
  secondCard,
  thirdCard,
} from "../floating-card/FloatingCard.data";
import { useInView } from "react-intersection-observer";
import { LinkButton } from "../linkButton/LinkButton";
import { useModal } from "../../hooks/useModal";
import { ModalProvider } from "../../providers/ModalProvider";
import { Modal } from "../modal/Modal";
import { Backdrop } from "../modal/Backdrop";

export const ThreeMenus = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <article ref={ref} className={styles["container"]}>
        <h1 className={styles["container__heading"]}>
          <span className={styles["container__heading--inner"]}>
            Popularne Diety
          </span>
        </h1>
        <div className={styles["container__content"]}>
          <FloatingCard
            card={firstCard}
            className={`${inView ? "scale-up" : ""}`}
          />
          <FloatingCard
            card={secondCard}
            className={`${inView ? "scale-up" : ""}`}
          />
          <FloatingCard
            card={thirdCard}
            className={`${styles["isMobile"]} ${inView ? "scale-up" : ""}`}
          />
        </div>
        <LinkButton text="Zobacz więcej" navigateTo="/diety" />
      </article>
    </>
  );
};
