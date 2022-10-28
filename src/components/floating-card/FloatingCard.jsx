import React from "react";
import styles from "./FloatingCard.styles.module.scss";

export const FloatingCard = ({ card }) => {
  const styledPicture = {
    backgroundImage: `linear-gradient(to right, ${card.gradientColor1} 0%, ${card.gradientColor2} 51%, ${card.gradientColor1} 100%), url(${card.backgroundUrl})`,
    WebkitClipPath: `${card.picturePose}`,
    clipPath: `${card.picturePose}`,
    borderTopLeftRadius: "3px",
    borderTopRightRadius: "3px",
  };

  return (
    <div className={styles.card}>
      <div className={`${styles["card__side"]} ${styles["card__side--front"]}`}>
        <div className={`${styles["card__picture"]}`} style={styledPicture}>
          &nbsp;
        </div>
        <h4 className={styles["card__heading"]}>
          <span
            className={`${styles["card__heading-span"]} ${styles["card__heading-span--1"]}`}
          >
            {card.title}
          </span>
        </h4>
        <div className={styles["card__details"]}>
          <ul>
            <li>{card.details.size}</li>
            {card.details.opisy.map((detail) => (
              <li>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={`${styles["card__side"]} ${styles["card__side--back"]} ${styles["card__side--back-1"]}`}
      >
        <div className={styles["card__cta"]}>
          <div className={styles["card__price-box"]}>
            <p className={styles["card__price-only"]}>Teraz tylko</p>
            <p className={styles["card__price-value"]}>79.99 zł</p>
          </div>
          <button className={styles["button"]}>Kup teraz</button>
        </div>
      </div>
    </div>
  );
};
