import styles from "./Quote.styles.module.scss";
import imageRef from "/assets/breakfast.jpg";

export const Quote = () => {
  return (
    <section className={styles.quote}>
      <div className={styles["quote__background"]}></div>
      <div className={styles["box"]}>
        <h2 className={styles["box__quote"]}>
          „Sukces jest jak drabina – nie wejdziesz na nią trzymając ręce w
          kieszeni.” – Philip Wylie
        </h2>
      </div>
    </section>
  );
};
