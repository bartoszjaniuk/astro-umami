import { CertificatesGallery } from "../../components/certificatesGallery/CertificatesGallery";
import styles from "./About.styles.module.scss";
import introductionImageReference from "/assets/about.PNG";
import secondaryImageReference from "/assets/about-avocado.png";
import { Icon } from "@iconify/react";

export const About = () => {
  return (
    <main className={styles.container}>
      <section className={styles.about}>
        <div className={styles["content"]} id="wyksztalcenie">
          <span className={styles["content__profession"]}>DIETETYK</span>
          <h1 className={styles["content__heading"]}>Aleksandra Kajstura</h1>
          <p className={styles["content__description"]}>
            Nazywam się Aleksandra Kajstura, jestem dietetykiem i nauczę Cię jak
            zadbać o siebie i zacząć prowadzić zdrowy styl życia krok po kroku.
            Jestem absolwentką Uniwersytetu Opolskiego, a dalszą naukę
            kontynuuję w Wyższej Szkole Biznesu i Nauk o Zdrowiu w Łodzi na
            studiach magisterskich. Cały czas się szkolę, uczę i zdobywam wiedzę
            na studiach, praktykach zawodowych czy szkoleniach. Służę pomocą
            jeśli zmagasz się z problemami zdrowotnymi, z nadmierną lub za niską
            masą ciała lub po prostu chcesz zmienić swoje nawyki żywieniowe.
          </p>
          <p className={styles["content__command"]}>
            Współpracując ze mną nie tylko{" "}
            <span className={styles["content__command--highlight"]}>
              uzyskasz wymarzoną sylwetkę{" "}
            </span>{" "}
            ale również pokochasz swoje ciało{" "}
            <span className={styles["content__command--highlight"]}>
              i poprawisz swoje samopoczucie!
            </span>{" "}
          </p>
        </div>
        <div className={styles["person"]}>
          {/* <h2 className={styles["person__heading"]}>Aleksandra Kajstura</h2> */}
          <div className={styles["person__image"]}>
            <img src={introductionImageReference} alt="Aleksandra Kajstura" />
          </div>
        </div>
      </section>
      <div className={styles["tags-strip"]}>
        <ul className={styles["tags-strip-list"]}>
          <li className={styles["tags-strip-list__item"]}>
            <Icon icon="mdi:food-apple" fontSize="2.7rem" />
            ZDROWA DIETA
          </li>
          <li className={styles["tags-strip-list__item"]}>
            <Icon icon="game-icons:body-balance" fontSize="2.7rem" />
            ZDROWE CIAŁO
          </li>
          <li className={styles["tags-strip-list__item"]}>
            <Icon icon="icon-park-outline:brain" fontSize="2.7rem" />
            ZDROWY UMYSŁ
          </li>
        </ul>
      </div>
      <section className={`${styles.about} ${styles["about--cd"]}`}>
        <div className={styles["person-secondary"]}>
          <div className={styles["person-secondary__image"]}>
            <img src={secondaryImageReference} alt="Aleksandra Kajstura" />
          </div>
        </div>
        <div className={styles["content"]}>
          <h1 className={styles["content__heading"]}>
            U mnie nie ma diety cud!
          </h1>
          <p className={styles["content__description"]}>
            Jako dietetyk przeprowadzę Cię przez proces zmiany nawyków
            żywieniowych bez magicznych sztuczek. Nauczę Cię jak jeść smacznie i
            zdrowo, a kiedy pojawią się pierwsze efekty i w związku z tym
            poprawi się Twoje samopoczucie pokażę Ci jak utrzymać wymarzoną
            sylwetkę i upragniony styl życia.
          </p>
          <p className={styles["content__command"]}>
            <span className={styles["content__command--highlight"]}>
              ZMIANA NAWYKÓW ŻYWIENIOWYCH = ZMIANA STYLU ŻYCIA.
            </span>{" "}
          </p>

          <div className={styles["content__buttons-group"]}>
            <a href="/oferta" className={styles["content__link"]}>
              <button className={styles["content__button"]}>
                Przejdź do oferty
              </button>
            </a>
            <a href="/diety" className={styles["content__link"]}>
              <button
                className={`${styles["content__button"]} ${styles["content__button--inverted"]}`}
              >
                Sprawdź jadłospisy
              </button>
            </a>
          </div>
        </div>
      </section>
      <section className={styles.certificates} id="certyfikaty">
        <div className={styles["certificates__heading"]}>Kwalifikacje</div>
        <div className={styles["certificates__content"]}>
          <CertificatesGallery />
        </div>
      </section>
    </main>
  );
};
