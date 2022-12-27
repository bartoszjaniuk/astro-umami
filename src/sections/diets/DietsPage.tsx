import styles from "./DietsPage.styles.module.scss";
import imageReference from "/assets/people.png";
import { firstCard } from "../../components/floating-card/FloatingCard.data";

import imageRefPancakes from "/assets/pancakes.png";
import { LinkButton } from "../../components/linkButton/LinkButton";
import { Diet } from "./diet/Diet";
import { DietCard } from "./diet-card/DietCard";

export const DietsPage = () => {
  return (
    <main className={styles.container}>
      <section className={styles["intro"]}>
        <div className={styles["background-shape"]}></div>
        <div className={styles["background-shape--big"]}></div>
        <div className={styles["intro__heading"]}>
          <h2>
            Osiągnij lepszą wagę, wymarzoną sylwetkę i doskonałe samopoczucie
            pod okiem naszych dietetyków online.
          </h2>
        </div>
        <div className={styles["intro__subheading"]}>
          <p>
            Dietetyk Umami to miejsce, gdzie codziennie rozprawiamy się ze złymi
            kilogramami. To tutaj nasz zespół specjalistów pomoże Ci je zdrowo i
            skutecznie poskromić. Tak jak lubisz. Bez wyrzeczeń, bez stresu, bez
            efektu jo-jo.
          </p>
        </div>
        <div className={styles["intro__button"]}>
          <LinkButton
            text="Sprawdź jadłospisy"
            navigateTo="/diety/#jadlospisy"
          />
        </div>

        <div className={styles["intro__image"]}>
          <img
            src={imageReference}
            alt="Ilustracja ludzi. Utworzono przez pch.vector / Freepik"
          />
        </div>
      </section>
      <section className={styles.diets} id="jadlospisy">
        <DietCard />
        <DietCard />
        <DietCard />
      </section>
    </main>
  );
};
