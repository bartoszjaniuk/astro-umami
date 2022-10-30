import React from "react";
import { Card } from "./card/Card";
import styles from "./HowToWorkWithMe.styles.module.scss";
import { cards } from "./data";
import { useInView } from "react-intersection-observer";

export const HowToWorkWithMe = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section className={styles.container}>
      <h1 className={styles["container__heading"]}>
        Jak rozpocząć ze mną współpracę w pięciu krokach
      </h1>
      <div
        ref={ref}
        className={`${styles["container__content"]} ${inView ? "animate" : ""}`}
      >
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
          />
        ))}
      </div>
    </section>
  );
};
