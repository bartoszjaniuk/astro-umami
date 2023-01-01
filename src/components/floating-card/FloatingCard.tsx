import styles from "./FloatingCard.styles.module.scss";
import { useModal } from "../../hooks/useModal";

export const FloatingCard = ({
  card,
  className,
}: {
  card: any;
  className: string;
}) => {
  const styledPicture = {
    backgroundImage: `linear-gradient(to right, ${card.gradientColor1} 0%, ${card.gradientColor2} 51%, ${card.gradientColor1} 100%), url(${card.backgroundUrl})`,
    WebkitClipPath: `${card.picturePose}`,
    clipPath: `${card.picturePose}`,
    borderTopLeftRadius: "3px",
    borderTopRightRadius: "3px",
  };

  const { openModal, chooseDiet } = useModal();

  return (
    <div className={`${styles.card} ${className}`}>
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
            {card.details.opisy.map((detail, index) => (
              <li key={index}>{detail}</li>
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
            <p className={styles["card__price-value"]}>99 zł</p>
          </div>
          <button
            className={styles["button"]}
            onClick={async () => {
              chooseDiet(card.title);
              openModal();
            }}
          >
            Wybierz dietę
          </button>
        </div>
      </div>
    </div>
  );
};
