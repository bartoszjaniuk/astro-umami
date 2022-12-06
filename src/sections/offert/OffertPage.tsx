import styles from "./OffertPage.styles.module.scss";
import imageOffertRef from "/assets/aleksandra_offert.png";
import { Icon } from "@iconify/react";

export const OffertPage = () => {
  return (
    <main className={styles.offert}>
      <section className={styles.introduction}>
        <div className={styles["content"]}>
          <h2 className={styles["content__heading"]}>DIETA ONLINE.</h2>
          <h5 className={styles["content__heading--secondary"]}>
            Zrób pierwszy krok juz dziś, nie jutro.
          </h5>
          <div className={styles["content__description"]}>
            Pomogę Ci schudnąć bez wyrzeczeń nawet jeśli zmagasz się z jakimiś
            problemami zdrowotnymi. Dzięki mojej pomocy będziesz mieć więcej
            energii i polepszysz swoje samopoczucie oraz stan zdrowia!
          </div>
        </div>
        <div className={styles["image"]}>
          <img src={imageOffertRef} alt="Aleksandra Kajstura" />
        </div>
      </section>
      <section className={styles["tags-strip"]}>
        <ul className={styles["tags-strip-list"]}>
          <li className={styles["tags-strip-list__item"]}>
            <Icon icon="game-icons:talk" fontSize="2.7rem" />
            Konsultacje dietetyczne online
          </li>
          <li className={styles["tags-strip-list__item"]}>
            <Icon icon="game-icons:notebook" fontSize="2.7rem" />
            Indywidualny plan żywieniowy
          </li>
          <li className={styles["tags-strip-list__item"]}>
            <Icon icon="game-icons:beech" fontSize="2.7rem" />
            Edukacja żywieniowa
          </li>
        </ul>
      </section>
    </main>
  );
};
