import styles from "./Quote.styles.module.scss";

export const Quote = () => {
  return (
    <section className={styles.quote}>
      <div className={styles["quote__background"]}></div>
      <div className={styles["box"]}>
        <h2 className={styles["box__quote"]}>
          „Sukces jest jak drabina – nie wejdziesz na nią trzymając ręce w
          kieszeni.” – Philip Wylie
        </h2>
        {/* <p className={styles["box__content"]}>
          Tylko jeden krok dzieli Cię od zmiany na lepsze. Napisz do mnie już
          teraz, a ja pomogę Ci w realizacji Twoich celów!
        </p> */}
      </div>
    </section>
  );
};

{
  /* <section className={styles.showcase}>
<div className={styles["showcase__background"]}>
  <img
    src="https://images.unsplash.com/photo-1521986329282-0436c1f1e212?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80"
    alt=""
  />
</div>
<h5 className={styles["showcase__heading"]}>
  Dieta online bez wychodzenia z domu
</h5>
<p className={styles["showcase__paragraph"]}>
  W zapracowanym świecie trudno zadbać o siebie. Dlatego przygotowaliśmy
  dla naszych klientów wygodną opcję diety i konsultacji online.
</p>
<LinkButton
  navigateTo={RoutePath.OFFER}
  text="Sprawdź ofertę"
  isInverted
/>
</section> */
}
