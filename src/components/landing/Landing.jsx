import React from "react";
import { Button } from "../button/Button";
import styles from "./Landing.styles.module.scss";

export const Landing = () => {
  return (
    <main className={styles.container}>
      <div className={styles["container__left"]}>
        <img
          className={styles["img-left"]}
          src="https://images.pexels.com/photos/4065624/pexels-photo-4065624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Kobieta na chuśtawce"
        />
      </div>
      <div className={styles["container__right"]}>
        <img
          className={styles["img-right"]}
          src="https://images.pexels.com/photos/389818/pexels-photo-389818.jpeg"
          alt="Stanowisko pracy"
        />
      </div>
      <div className={styles["container__modal"]}>
        <div className={styles["container__modal--content"]}>
          <h1>Resilence Coaching and Strategy For The Modern Woman</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
            aut totam laborum praesentium nisi unde ipsam esse numquam,
            inventore quidem explicabo quis ea eum necessitatibus voluptatum.
            Debitis, recusandae illo? Reprehenderit.
          </p>
          <Button size="md">Dowiedz się więcej</Button>
        </div>
      </div>
    </main>
  );
};
