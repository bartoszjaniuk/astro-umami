import { useModal } from "../../../hooks/useModal";
import styles from "./DietCard.styles.module.scss";

type DietCardProps = {
  title: string;
  opisy: string[];
  img: string;
};

export const DietCard = ({ title, opisy, img }: DietCardProps) => {
  const { chooseDiet, openModal } = useModal();

  return (
    <div className={styles["diet"]}>
      <div className={styles["col-left"]}>
        <div className={styles["col-left__wrapper"]}>
          <div className={styles["col-left__inner"]}>
            <img src={img} alt="Karta z dietą" />
          </div>
        </div>

        <div className={styles["col-left__footer"]}>
          <button
            onClick={() => {
              chooseDiet(title);
              openModal();
            }}
          >
            Wybierz dietę
          </button>
        </div>
      </div>
      <div className={styles["col-right"]}>
        <h3 className={styles["col-right__heading"]}>{title}</h3>
        <ul className={styles["col-right__list"]}>
          {opisy.map((opis, index) => (
            <li key={index}>{opis}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
