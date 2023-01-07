import React from "react";
import styles from "./Offert.styles.module.scss";
import { useInView } from "react-intersection-observer";
import introductionImgReference from "/assets/ola.png";
import { LinkButton } from "../linkButton/LinkButton";
import { RoutePath } from "../nav/AppRoute.enum";

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
          <h1 className={styles["introduction__heading--h2"]}>
            Aleksandra Kajstura
          </h1>
          <h5 className={styles["introduction__heading--highlight"]}>
            dyplomowany dietetyk online
          </h5>
        </div>
        <p className={styles["introduction__content"]}>
          Nazywam się Aleksandra Kajstura, jestem dietetykiem z miasta Racibórz
          i nauczę Cię jak zadbać o siebie i zacząć prowadzić zdrowy styl życia
          krok po kroku. Jestem absolwentką Uniwersytetu Opolskiego, a dalszą
          naukę kontynuuję w Wyższej Szkole Biznesu i Nauk o Zdrowiu w Łodzi na
          studiach magisterskich. Cały czas się szkolę, uczę i zdobywam wiedzę
          na studiach, praktykach zawodowych czy szkoleniach. Służę pomocą jeśli
          zmagasz się z problemami zdrowotnymi, z nadmierną lub za niską masą
          ciała lub po prostu chcesz zmienić swoje nawyki żywieniowe.
        </p>
        <LinkButton text="Dowiedz się więcej" navigateTo={RoutePath.ABOUT} />
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
