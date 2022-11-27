import React from "react";
import { Button } from "../button/Button";
import styles from "./Landing.styles.module.scss";

export const Landing = () => {
  return (
    <main className={styles.container}>
      <div className={styles["container__left"]}>
        <img
          className={styles["img-left"]}
          src="https://images.pexels.com/photos/4065624/pexels-photo-4065624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Kobieta na chuśtawce"
        />
      </div>
      <div className={styles["container__right"]}>
        <img
          className={styles["img-right"]}
          src="https://images.pexels.com/photos/389818/pexels-photo-389818.jpeg"
          alt="Stanowisko pracy"
        />
      </div>
      <div className={styles["container__modal"]}>
        <div className={styles["modal-content"]}>
          <h1 className={styles["modal-content__heading"]}>
            „Sukces jest jak drabina – nie wejdziesz na nią trzymając ręce w
            kieszeni.” – Philip Wylie
          </h1>
          <p className={styles["modal-content__text"]}>
            Tylko jeden krok dzieli Cię od zmiany na lepsze. Napisz do mnie już
            teraz, a ja pomogę Ci w realizacji Twoich celów!
          </p>
          <button className={styles["modal-content__button"]}>
            Dowiedz się więcej
          </button>
        </div>
      </div>
    </main>
  );
};
