import React from "react";
import styles from "./Offert.styles.module.scss";
import { useInView } from "react-intersection-observer";

export const Offert = () => {
  const { ref: introductionRef, inView: introductionInView } = useInView({
    triggerOnce: true,
  });

  const image =
    // "https://akopszostak.com/wp-content/uploads/2022/02/akop-wskazuje-lewo-1-1-326x415.png";
    "assets/acia.png";

  return (
    <section className={styles.container}>
      <span className={styles["container__inner-element"]} />
      <span className={styles["container__inner-element--medium"]} />
      <span className={styles["container__inner-element--big"]} />
      <div
        ref={introductionRef}
        className={`${styles["introduction"]} ${
          introductionInView ? "slide-from-left" : ""
        }`}
      >
        <h2 className={styles["introduction__heading"]}>
          Dyplomowany Dietetyk Online <br />
          <span className={styles["introduction__heading--highlight"]}>
            Aleksandra Kajstura
          </span>
        </h2>
        <p className={styles["introduction__content"]}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
          voluptatum esse nesciunt laboriosam accusamus repellendus eveniet
          dolores, nemo placeat odio adipisci blanditiis numquam? Amet officia
          quam cumque. Eos officia incidunt, possimus totam, minus aspernatur
          hic, ex nemo mollitia dignissimos praesentium. Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Similique, est laborum. Sunt
          perferendis ipsam suscipit, blanditiis eaque facilis excepturi porro
          doloribus, minus maxime, labore quidem rerum fugiat consequuntur
          aliquid asperiores natus maiores ex sed exercitationem! Reprehenderit,
          sequi aliquam. Fugit, aperiam.
        </p>
        <p className={styles["introduction__highlight"]}>
          Teraz swoje know-how zainwestuję w Twoją przemianę. Pokażę Ci, jak w
          praktyce:
        </p>
        <ul className={styles["introduction__list"]}>
          <li>sami spełniamy marzenia</li>
          <li>pozbyć się złych nawyków</li>
          <li>spalić tłuszcz z brzucha</li>
        </ul>
      </div>
      <div
        className={`${styles["photo"]} ${
          introductionInView ? "slide-from-right" : ""
        }`}
      >
        <img
          className={styles["photo__img"]}
          src={image}
          alt="Człowiek wskazujący palcem na opis"
        />
      </div>
    </section>
  );
};
