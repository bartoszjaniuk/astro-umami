import { firstCard } from "../../../components/floating-card/FloatingCard.data";
import { LinkButton } from "../../../components/linkButton/LinkButton";
import styles from "./Diet.styles.module.scss";
import imageRefPancakes from "/assets/pancakes.png";

export const Diet = () => {
  return (
    <div className={styles.diet}>
      <div className={styles["col-left"]}>
        <h3 className={styles["col-left__heading"]}>SERCE BOHATERA</h3>
        <div className={styles["col-left__image"]}>
          <img
            src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className={styles["col-left__footer"]}>1400 KCAL</div>
      </div>
      <div className={styles["col-right"]}>
        <h3 className={styles["col-right__heading"]}>Jadłospis 1400 KCAL</h3>
        <ul className={styles["col-right__list"]}>
          {firstCard.details.opisy.map((v, index) => (
            <li key={index}>{v}</li>
          ))}
        </ul>
        <div className={styles["col-right__button"]}>
          <LinkButton text="Wybieram dietę" navigateTo="/" />
        </div>
      </div>
    </div>
  );
};
