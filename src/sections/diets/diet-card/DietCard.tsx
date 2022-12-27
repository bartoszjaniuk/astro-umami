import React from "react";
import styles from "./DietCard.styles.module.scss";
import imageRefPancakes from "/assets/pancakes.png";
import { firstCard } from "../../../components/floating-card/FloatingCard.data";

export const DietCard = () => {
  return (
    <div className={styles["diet"]}>
      <div className={styles["col-left"]}>
        <div className={styles["col-left__heading"]}>
          <h3>Dieta 1600 KCAL</h3>
        </div>

        <div className={styles["col-left__wrapper"]}>
          <div className={styles["col-left__inner"]}>
            <img src={imageRefPancakes} alt="" />
          </div>
        </div>

        <div className={styles["col-left__footer"]}>
          <button>Wybierz dietę</button>
        </div>
      </div>
      <div className={styles["col-right"]}>
        <h3 className={styles["col-right__heading"]}>SERCE BOHATERA</h3>
        <ul className={styles["col-right__list"]}>
          {firstCard.details.opisy.map((v, index) => (
            <li key={index}>{v}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
