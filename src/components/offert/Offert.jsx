import React from "react";
import styles from "./Offert.styles.module.scss";
import { useInView } from "react-intersection-observer";
import introductionImgReference from "/assets/ola.png";

export const Offert = () => {
  const { ref: introductionRef, inView: introductionInView } = useInView({
    triggerOnce: true,
  });

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
        <div className={styles["introduction__heading"]}>
          <h2 className={styles["introduction__heading--h2"]}>
            Aleksandra Kajstura
          </h2>
          <h5 className={styles["introduction__heading--highlight"]}>
            dyplomowany dietetyk online
          </h5>
        </div>
        <p className={styles["introduction__content"]}>
          Nazywam się Aleksandra Kajstura, jestem dietetykiem i nauczę Cię jak
          zadbać o siebie i zacząć prowadzić zdrowy styl życia krok po kroku.
          Jestem absolwentką Uniwersytetu Opolskiego, a dalszą naukę kontynuuję
          w Wyższej Szkole Biznesu i Nauk o Zdrowiu w Łodzi na studiach
          magisterskich. Cały czas szkolę się, uczę i zdobywam wiedzę na
          studiach, praktykach zawodowych czy szkoleniach. Służę pomocą jeśli
          zmagasz się z problemami zdrowotnymi, z nadmierną lub za niską masą
          ciała lub po prostu chcesz zmienić swoje nawyki żywieniowe.
        </p>
      </div>
      <div
        className={`${styles["photo"]} ${
          introductionInView ? "slide-from-right" : ""
        }`}
      >
        <img
          className={styles["photo__img"]}
          src={introductionImgReference}
          alt="Człowiek wskazujący palcem na opis"
        />
      </div>
    </section>
  );
};
