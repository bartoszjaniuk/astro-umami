import React from "react";
import styles from "./ThreeMenus.styles.module.scss";
import { FloatingCard } from "./../floating-card/FloatingCard";
import {
  firstCard,
  secondCard,
  thirdCard,
} from "./../floating-card/FloatingCard.data";

export const ThreeMenus = () => {
  return (
    <article className={styles["container"]}>
      <h1 className={styles["container__heading"]}>
        <span className={styles["container__heading--inner"]}>
          Popularne Diety
        </span>
      </h1>
      <div className={styles["container__content"]}>
        <FloatingCard card={firstCard} />
        <FloatingCard card={secondCard} />
        <FloatingCard card={thirdCard} />
      </div>

      <button className={styles["button"]}>Zobacz więcej</button>
    </article>
  );
};
