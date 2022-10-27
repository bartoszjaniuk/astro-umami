import React from "react";
import styles from "./FloatingCard.styles.module.scss";

// import { Button } from "./../button/Button";

export const FloatingCard = () => {
  const title = "Title";
  const backgroundUrl =
    "https://v.wpimg.pl/MWZiLmpwYjY7CzpeXwxvI3hTbgQZVWF1L0t2T19Gf29qEWMAXhwiOjUbJwIdFiM-O0c8AV8EPTYoHS0OBQRgOzUOI0AeEjp6PAh5VEkRdGduWX0LElknJz1LMQ";

  const gradientColor1 = "blue";
  const gradientColor2 = "purple";

  return (
    <div className={styles.card}>
      <div className={`${styles["card__side"]} ${styles["card__side--front"]}`}>
        <div
          className={`${styles["card__picture"]} ${styles["card__picture--1"]}`}
        >
          &nbsp;
        </div>
        <h4 className={styles["card__heading"]}>
          <span
            className={`${styles["card__heading-span"]} ${styles["card__heading-span--1"]}`}
          >
            The Hiking Hero
          </span>
        </h4>
        <div className={styles["card__details"]}>
          <ul>
            <li>3 day tour</li>
            <li>Up to 30 people</li>
            <li>2 tour guides</li>
            <li>Sleep in cozy hotels</li>
            <li>Difficulty: easy</li>
          </ul>
        </div>
      </div>
      <div
        className={`${styles["card__side"]} ${styles["card__side--back"]} ${styles["card__side--back-1"]}`}
      >
        <div className={styles["card__cta"]}>
          <div className={styles["card__price-box"]}>
            <p className={styles["card__price-only"]}>Only</p>
            <p className={styles["card__price-value"]}>$199</p>
          </div>
          <a href="#popup" className="btn btn--white">
            Book now!
          </a>
        </div>
      </div>
    </div>
  );
};
