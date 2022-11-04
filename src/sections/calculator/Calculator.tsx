import React from "react";
import { Button } from "../../components/button/Button";
import styles from "./Calculator.styles.module.scss";

export const Calculator = () => {
  return (
    <section className={styles.container}>
      <div className={styles["description"]}>
        <h3 className={styles["description__heading"]}>
          Która{" "}
          <span className={styles["description__heading--highlight"]}>
            dieta
          </span>{" "}
          będzie <br /> dla Ciebie{" "}
          <span className={styles["description__heading--highlight"]}>
            idealna?
          </span>
        </h3>
        <p className={styles["description__content"]}>
          Skorzystaj z kalkulatora, aby dowiedzieć się, jakie obecnie masz
          zapotrzebowanie kaloryczne. Po wpisaniu swoich danych dowiesz się ile
          powinieneś jeść, aby osiągnąć swój cel. Skorzystaj z kalkulatora, aby
          dowiedzieć się, jakie obecnie masz zapotrzebowanie kaloryczne. Po
          wpisaniu swoich danych dowiesz się ile powinieneś jeść, aby osiągnąć
          swój cel.
        </p>
        <div className={styles["description__buttons"]}>
          <Button className={styles["description__button"]} isInverted>
            Przejdź do kalkulatora
          </Button>
          <Button className={styles["description__button"]}>
            Napisz do mnie
          </Button>
        </div>
      </div>
      <div className={styles["picture"]}>
        <img
          className={styles["picture__img"]}
          src="assets/personWithPhone.svg"
        />
        <span className={styles["picture__circle"]} />
        <span className={styles["picture__circle--medium"]} />
        <span className={styles["picture__circle--big"]} />
      </div>
    </section>
  );
};
