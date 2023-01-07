import styles from "./ThreeMenus.styles.module.scss";
import { FloatingCard } from "../floating-card/FloatingCard";
import {
  firstCard,
  secondCard,
  thirdCard,
} from "../floating-card/FloatingCard.data";
import { useInView } from "react-intersection-observer";
import { LinkButton } from "../linkButton/LinkButton";
import { RoutePath } from "../nav/AppRoute.enum";

export const ThreeMenus = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <article ref={ref} className={styles["container"]}>
        <h1 className={styles["container__heading"]}>
          <span className={styles["container__heading--inner"]}>
            Popularne Diety
          </span>
        </h1>
        <div className={styles["container__content"]}>
          <FloatingCard
            card={firstCard}
            className={`${inView ? "scale-up" : ""}`}
          />
          <FloatingCard
            card={secondCard}
            className={`${inView ? "scale-up" : ""}`}
          />
          <FloatingCard
            card={thirdCard}
            className={`${styles["isMobile"]} ${inView ? "scale-up" : ""}`}
          />
        </div>
        <h5 className={styles["navigateTo"]}>
          Sprawdź, ile powinieneś spożywać kalorii w ciągu dnia, dzięki{" "}
          <a className="link" href={RoutePath.KALKULATOR}>
            kalkulatorowi kalorii!
          </a>{" "}
        </h5>
        <LinkButton text="Zobacz więcej" navigateTo="/diety" />
      </article>
    </>
  );
};
