import React from "react";
import styles from "./Offert.styles.module.scss";

export const Offert = () => {
  const image =
    // "https://akopszostak.com/wp-content/uploads/2022/02/akop-wskazuje-lewo-1-1-326x415.png";
    "assets/acia.png";

  return (
    <article className={styles.container}>
      <div className={styles["introduction"]}>
        <h2 className={styles["introduction__heading"]}>
          Dyplomowany Dietetyk Online <br /> Aleksandra Kajstura
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
      <div className={styles["photo"]}>
        <img
          className={styles["photo__img"]}
          src={image}
          alt="Człowiek wskazujący palcem na opis"
        />
      </div>
    </article>
  );
};
