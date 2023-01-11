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
          powinieneś jeść, aby osiągnąć swój cel.
        </p>
        <div className={styles["description__buttons"]}>
          <a href="/kalkulator" className={styles["link"]}>
            <button className={styles["button"]}>Przejdź do kalkulatora</button>
          </a>
          <a href="/#napisz-do-mnie" className={styles["link"]}>
            <button
              className={`${styles["button"]} ${styles["button--inverted"]}`}
            >
              Napisz do mnie
            </button>
          </a>
        </div>
      </div>
      <div className={styles["picture"]}>
        <img
          className={styles["picture__img"]}
          src="assets/personWithPhone.svg"
          alt="osoba z telefonem"
        />
        <span className={styles["picture__circle"]} />
        <span className={styles["picture__circle--medium"]} />
        <span className={styles["picture__circle--big"]} />
      </div>
    </section>
  );
};
