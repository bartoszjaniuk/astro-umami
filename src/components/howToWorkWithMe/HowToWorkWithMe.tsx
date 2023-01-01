import React from "react";
import { Card } from "./card/Card";
import styles from "./HowToWorkWithMe.styles.module.scss";
import { cards } from "./data";
import { useInView } from "react-intersection-observer";
import { LinkButton } from "../linkButton/LinkButton";

export const HowToWorkWithMe = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section className={styles.container}>
      <h1
        className={styles["container__heading"]}
        id="jak-rozpoczac-wspolprace"
      >
        Jak rozpocząć ze mną współpracę w czterech krokach
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
      <LinkButton text="Napisz do mnie" navigateTo="/#napisz-do-mnie" />
    </section>
  );
};
