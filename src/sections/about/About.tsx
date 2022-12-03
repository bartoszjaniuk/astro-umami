import React from "react";
import { CertificatesGallery } from "../../components/certificatesGallery/CertificatesGallery";
import styles from "./About.styles.module.scss";
import introductionImageReference from "/assets/introduction.png";
import secondaryImageReference from "/assets/secondaryOla.jpg";
import { Icon } from "@iconify/react";

export const About = () => {
  return (
    <main className={styles.container}>
      <section className={styles.about}>
        <div className={styles["content"]}>
          <span className={styles["content__profession"]}>DIETETYK</span>
          <h1 className={styles["content__heading"]}>Aleksandra Kajstura</h1>
          <p className={styles["content__description"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            praesentium officiis iure ullam esse ipsa perspiciatis distinctio
            harum dicta cum vel adipisci recusandae soluta deleniti, explicabo
            perferendis quae est cumque maxime omnis voluptates? A, repudiandae
            ut! Consequatur, saepe labore nemo quam aperiam, itaque pariatur
            provident tenetur ex cum veniam recusandae alias consequuntur optio
            eligendi quas dignissimos maiores id cupiditate reiciendis, magnam
            explicabo? Ducimus vel impedit velit odio quaerat, illo inventore at
            ut dolorem iure error tempore optio necessitatibus dignissimos
            accusamus nostrum architecto assumenda doloribus sed minima?
            Delectus ipsum sapiente expedita rerum nulla distinctio suscipit
            explicabo vero voluptas possimus! Eum, error.
          </p>
          <p className={styles["content__command"]}>
            Współpracując ze mną nie tylko{" "}
            <span className={styles["content__command--highlight"]}>
              schudniesz
            </span>{" "}
            oraz zrobisz wymarzoną sylwetkę, ale również{" "}
            <span className={styles["content__command--highlight"]}>
              pokochasz swoje ciało
            </span>{" "}
            i poprawisz swoje samopoczucie!
          </p>
          <div className={styles["content__button-container"]}>
            <button>Przejdź do oferty</button>
          </div>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            praesentium officiis iure ullam esse ipsa perspiciatis distinctio
            harum dicta cum vel adipisci recusandae soluta deleniti, explicabo
            perferendis quae est cumque maxime omnis voluptates? A, repudiandae
            ut! Consequatur, saepe labore nemo quam aperiam, itaque pariatur
            provident tenetur ex cum veniam recusandae alias consequuntur optio
            eligendi quas dignissimos maiores id cupiditate reiciendis, magnam
            explicabo? Ducimus vel impedit velit odio quaerat, illo inventore at
            ut dolorem iure error tempore optio necessitatibus dignissimos
            accusamus nostrum architecto assumenda doloribus sed minima?
            Delectus ipsum sapiente expedita rerum nulla distinctio suscipit
            explicabo vero voluptas possimus! Eum, error.
          </p>
          <p className={styles["content__command"]}>
            Współpracując ze mną nie tylko{" "}
            <span className={styles["content__command--highlight"]}>
              schudniesz
            </span>{" "}
            oraz zrobisz wymarzoną sylwetkę, ale również{" "}
            <span className={styles["content__command--highlight"]}>
              pokochasz swoje ciało
            </span>{" "}
            i poprawisz swoje samopoczucie!
          </p>
          <div className={styles["content__button-container"]}>
            <button>Sprawdź jadłospisy</button>
          </div>
        </div>
      </section>
      <section className={styles.certificates}>
        <div className={styles["certificates__heading"]}>Kwalifikacje</div>
        <div className={styles["certificates__content"]}>
          <CertificatesGallery />
        </div>
      </section>
      {/* <section className={styles.outro}>
        <span className={styles["background-shape"]} />
        <span className={styles["background-shape--small"]} />
        <span className={styles["background-shape--very-small"]} />
        <span className={styles["background-shape--medium"]} />
        <div className={styles["outro__heading"]}>U mnie nie ma diety cud!</div>
        <div className={styles["outro__content"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          praesentium officiis iure ullam esse ipsa perspiciatis distinctio
          harum dicta cum vel adipisci recusandae soluta deleniti, explicabo
          perferendis quae est cumque maxime omnis voluptates? A, repudiandae
          ut! Consequatur, saepe labore nemo quam aperiam, itaque pariatur
          provident tenetur ex cum veniam recusandae alias consequuntur optio
          eligendi quas dignissimos maiores id cupiditate reiciendis, magnam
          explicabo? Ducimus vel impedit velit odio quaerat, illo inventore at
          ut dolorem iure error tempore optio necessitatibus dignissimos
          accusamus nostrum architecto assumenda doloribus sed minima? Delectus
          ipsum sapiente expedita rerum nulla distinctio suscipit explicabo vero
          voluptas possimus! Eum, error.
        </div>
      </section> */}
    </main>
  );
};
