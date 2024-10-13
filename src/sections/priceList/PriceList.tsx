import React from "react";
import { LinkButton } from "../../components/linkButton/LinkButton";
import { RoutePath } from "../../components/nav/AppRoute.enum";
import styles from "./PriceList.styles.module.scss";
import imageRef from "/assets/vegetables.jpg";
import bgRef from "/assets/cennik_background.jpg";

export const PriceList = () => {
	return (
		<main className="container">
			<section className={styles.introduction}>
				<img className={styles["introduction__image"]} src={imageRef} alt="" />
				<img
					className={`${styles["introduction__image-right"]}`}
					src={imageRef}
					alt="Picture shows drawn vegetables. Designed by veraholera / Freepik"
				/>
				<h2 className={styles["introduction__heading"]}>Gabinet Dietetyczny</h2>
				<h5 className={styles["introduction__subheading"]}>
					Wszystkie wizyty łączą w sobie porady dietetyczne, elementy motywacji,
					edukację żywieniową, <br />
					pracę z procesem zmiany, uzyskanie trwałego efektu <br />i zadowolenia
					z siebie.
				</h5>
			</section>

			<section className={styles["first-visit"]}>
				<h4 className={styles["first-visit__heading"]}>
					Konsultacja indywidualna
				</h4>
				<p className={styles["first-visit__subheading"]}>
					Chcesz zmienić styl życia na lepsze, ale nie masz pojęcia od czego
					zacząć? <br /> Potrzebujesz wsparcia i opieki od dietetyka? <br /> Ta
					opcja jest właśnie dla Ciebie!
				</p>

				<div className={styles["first-visit__content"]}>
					<div className={styles.card}>
						<h5 className={styles["card__heading"]}>
							Plan żywieniowy na 7 dni
						</h5>
						<span className={styles["card__price"]}>150 zł</span>
						<ul className={styles["card__list"]}>
							<li className={styles["card__list-item"]}>
								Indywidualny plan żywieniowy
							</li>
							<li className={styles["card__list-item"]}>
								Indywidualne zalecenia
							</li>
							<li className={styles["card__list-item"]}>Jadłospis na 7 dni</li>
							<li className={styles["card__list-item"]}>
								Jadłospis idealnie dopasowany do Twoich potrzeb
							</li>
						</ul>
					</div>
					<div className={`${styles.card} ${styles["card--active"]}`}>
						<h5 className={styles["card__heading"]}>Pierwsza konsultacja</h5>
						<span className={styles["card__price"]}>150 zł</span>
						<ul className={styles["card__list"]}>
							<li className={styles["card__list-item"]}>
								<li className={styles["card__list-item"]}>
									Wywiad zdrowotny i żywieniowy
								</li>
								<li className={styles["card__list-item"]}>
									Pomiar na analizatorze składu masy ciała
								</li>
								<li className={styles["card__list-item"]}>
									Omówienie dotychczasowej diety i błędów żywieniowych.
								</li>
								<li className={styles["card__list-item"]}>
									Edukacja żywieniowa i indywidualne zalecenia.
								</li>
								Koszt każdej kolejnej wizyty kontrolnej to 100 zł
							</li>
						</ul>
					</div>
					<div className={styles.card}>
						<h5 className={styles["card__heading"]}>
							Plan żywieniowy na 14 dni
						</h5>
						<span className={styles["card__price"]}>200 zł</span>
						<ul className={styles["card__list"]}>
							<li className={styles["card__list-item"]}>
								Indywidualny plan żywieniowy
							</li>
							<li className={styles["card__list-item"]}>
								Indywidualne zalecenia
							</li>
							<li className={styles["card__list-item"]}>Jadłospis na 14 dni</li>
							<li className={styles["card__list-item"]}>
								Jadłospis idealnie dopasowany do Twoich potrzeb
							</li>
						</ul>
					</div>
				</div>
				<div className={styles["first-visit__footer"]}>
					<p className={styles["first-visit__paragraph"]}>
						Wizyta może zostać przeprowadzona w dogodnej dla Ciebie formie
						(WhatsApp, Facebook, MS Teams itp.) lub stacjonarnie.
					</p>
					<p
						className={`${styles["first-visit__paragraph"]} ${styles["first-visit__paragraph--bold"]}`}
					>
						Po każdej konsultacji istnieje możliwość wykupienia planu
						żywieniowego.
					</p>

					<LinkButton
						navigateTo={RoutePath.CONTACT}
						text="Umów się na wizytę"
					/>
				</div>
			</section>
			{/* TODO: DISABLED SECTION */}
			{/* <section
        className={`${styles["first-visit"]} ${styles["first-visit--inverted"]}`}
      >
        <h4 className={styles["first-visit__heading"]}>Pakiety indywidualne</h4>
        <p className={styles["first-visit__subheading"]}>
          Podczas pierwszej konsultacji przyjrzymy się Twoim celom i ustalimy
          plan działania. <br /> Masz możliwość zakupienia pakietów, dzięki
          którym zaoszczędzisz co najmniej 20%.
        </p>

        <div className={styles["first-visit__content"]}>
          <div className={styles.card}>
            <h5 className={styles["card__heading"]}>Pakiet miesięczny</h5>
            <span className={styles["card__price"]}>280 zł</span>
            <span className={styles["card__difference"]}>
              zamiast 350 zł - oszczędzasz 70 zł
            </span>
            <ul className={styles["card__list"]}>
              <li className={styles["card__list-item"]}>Jadłospis na 7 dni</li>
              <li className={styles["card__list-item"]}>2 wizyty kontrolne</li>
              <li className={styles["card__list-item"]}>
                Indywidualne zalecenia i plan żywieniowy
              </li>
            </ul>
          </div>
          <div className={`${styles.card} ${styles["card--active"]}`}>
            <h5 className={styles["card__heading"]}>Pakiet dwumiesięczny</h5>
            <span className={styles["card__price"]}>480 zł</span>
            <span className={styles["card__difference"]}>
              zamiast 600 zł - oszczędzasz 120 zł
            </span>
            <ul className={styles["card__list"]}>
              <li className={styles["card__list-item"]}>Jadłospis na 14 dni</li>
              <li className={styles["card__list-item"]}>4 wizyty kontrolne</li>
              <li className={styles["card__list-item"]}>
                Indywidualne zalecenia i plan żywieniowy
              </li>
            </ul>
          </div>
          <div className={styles.card}>
            <h5 className={styles["card__heading"]}>Pakiet półroczny</h5>
            <span className={styles["card__price"]}>1200 zł</span>
            <span className={styles["card__difference"]}>
              zamiast 1600 zł - oszczędzasz 400 zł
            </span>
            <ul className={styles["card__list"]}>
              <li className={styles["card__list-item"]}>
                2x jadłospis na 14 dni
              </li>
              <li className={styles["card__list-item"]}>
                12 wizyt kontrolnych
              </li>
              <li className={styles["card__list-item"]}>
                Indywidualne zalecenia i plan żywieniowy
              </li>
            </ul>
          </div>
        </div>
        <div className={styles["first-visit__footer"]}>
          <p className={styles["first-visit__paragraph"]}>
            Wizyta może zostać przeprowadzona w dogodnej dla Ciebie formie
            (WhatsApp, Facebook, MS Teams itp.)
          </p>
          <p
            className={`${styles["first-visit__paragraph"]} ${styles["first-visit__paragraph--bold"]}`}
          >
            Po każdej konsultacji istnieje możliwość wykupienia planu
            żywieniowego.
          </p>

          <LinkButton
            navigateTo={RoutePath.CONTACT}
            text="Umów się na wizytę"
          />
        </div>
      </section> */}

			<section className={styles.showcase}>
				<div className={styles["showcase__background"]}>
					<img
						src="https://images.unsplash.com/photo-1521986329282-0436c1f1e212?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80"
						alt=""
					/>
				</div>
				<h5 className={styles["showcase__heading"]}>
					Dieta online bez wychodzenia z domu
				</h5>
				<p className={styles["showcase__paragraph--size"]}>
					W zapracowanym świecie trudno zadbać o siebie. Dlatego przygotowałam
					dla moich pacjentów wygodną opcję diety i konsultacji online, ale
					jeśli wolisz spotkać się ze mną stacjonarnie, to też jest taka
					możliwość!
				</p>
				<LinkButton
					navigateTo={RoutePath.OFFER}
					text="Sprawdź ofertę"
					isInverted
				/>
			</section>

			<section
				className={`${styles["individual"]} ${styles["individual--inverted"]}`}
			>
				<h4 className={styles["individual__heading"]}>Konsultacja dla par</h4>
				<p className={styles["individual__subheading"]}>
					Chcielibyście wspólnie o siebie zadbać? Nie macie pojęcia jak
					przygotowywać posiłki? <br /> Chcielibyście, aby cały ten proces był
					przyjemny i wygodny, a jednocześnie zindywidualizowany do Was? <br />{" "}
					Już dziś zapiszcie się do mnie na pierwszą konsultację, a ja rozwieję
					wszystkie wasze wątpliwości!
				</p>

				<div className={styles["individual__content"]}>
					<div className={styles.card}>
						<h5 className={styles["card__heading"]}>
							Plan żywieniowy na 7 dni
						</h5>
						<span className={styles["card__price"]}>200 zł</span>
						<ul className={styles["card__list"]}>
							<li className={styles["card__list-item"]}>
								Indywidualny plan żywieniowy
							</li>
							<li className={styles["card__list-item"]}>
								Indywidualne zalecenia
							</li>
							<li className={styles["card__list-item"]}>
								Jadłospis na 7 dni idealnie dopasowany do waszych potrzeb
							</li>
						</ul>
					</div>
					<div className={`${styles.card} ${styles["card--active"]}`}>
						<h5 className={styles["card__heading"]}>
							Pierwsza konsultacja dla pary
						</h5>
						<span className={styles["card__price"]}>200 zł</span>

						<ul className={styles["card__list"]}>
							<li className={styles["card__list-item"]}>
								Wywiad zdrowotny i żywieniowy
							</li>
							<li className={styles["card__list-item"]}>
								Pomiar na analizatorze składu masy ciała
							</li>
							<li className={styles["card__list-item"]}>
								Omówienie dotychczasowej diety i błędów żywieniowych.
							</li>
							<li className={styles["card__list-item"]}>
								Edukacja żywieniowa i indywidualne zalecenia.
							</li>
							<li className={styles["card__list-item"]}>
								Koszt każdej kolejnej wizyty kontrolnej to 150 zł
							</li>
						</ul>
					</div>
					<div className={styles.card}>
						<h5 className={styles["card__heading"]}>
							Plan żywieniowy na 14 dni
						</h5>
						<span className={styles["card__price"]}>250 zł</span>
						<ul className={styles["card__list"]}>
							<li className={styles["card__list-item"]}>
								Indywidualny plan żywieniowy
							</li>
							<li className={styles["card__list-item"]}>
								Indywidualne zalecenia
							</li>

							<li className={styles["card__list-item"]}>
								Jadłospis na 14 dni idealnie dopasowany do waszych potrzeb
							</li>
						</ul>
					</div>
				</div>
				<div className={styles["individual__footer"]}>
					<p className={styles["individual__paragraph"]}>
						Wizyta może zostać przeprowadzona w dogodnej dla Ciebie formie
						(WhatsApp, Facebook, MS Teams itp.) lub stacjonarnie.
					</p>
					<p
						className={`${styles["individual__paragraph"]} ${styles["individual__paragraph--bold"]}`}
					>
						Po każdej konsultacji istnieje możliwość wykupienia planu
						żywieniowego.
					</p>

					<LinkButton
						navigateTo={RoutePath.CONTACT}
						text="Umów się na wizytę"
					/>
				</div>
			</section>
			{/* TODO: DISABLED SECTION */}
			{/* <section className={styles["individual"]}>
        <h4 className={styles["individual__heading"]}>Pakiety dla par</h4>
        <p className={styles["individual__subheading"]}>
          Podczas pierwszej konsultacji przyjrzymy się Waszym celom i ustalimy
          plan działania. <br /> Macie możliwość zakupienia pakietów, dzięki
          którym zaoszczędzisz co najmniej 20%.
        </p>

        <div className={styles["individual__content"]}>
          <div className={styles.card}>
            <h5 className={styles["card__heading"]}>
              Pakiet miesięczny dla pary
            </h5>
            <span className={styles["card__price"]}>400 zł</span>
            <span className={styles["card__difference"]}>
              zamiast 500 zł - oszczędzasz 100 zł
            </span>
            <ul className={styles["card__list"]}>
              <li className={styles["card__list-item"]}>Jadłospis na 7 dni</li>
              <li className={styles["card__list-item"]}>2 wizyty kontrolne</li>
              <li className={styles["card__list-item"]}>
                Indywidualne zalecenia i plan żywieniowy dopasowany do każdej
                osoby oddzielnie
              </li>
            </ul>
          </div>
          <div className={`${styles.card} ${styles["card--active"]}`}>
            <h5 className={styles["card__heading"]}>
              Pakiet dwumiesięczny dla pary
            </h5>
            <span className={styles["card__price"]}>720 zł</span>
            <span className={styles["card__difference"]}>
              zamiast 500 zł - oszczędzasz 100 zł
            </span>
            <ul className={styles["card__list"]}>
              <li className={styles["card__list-item"]}>Jadłospis na 14 dni</li>
              <li className={styles["card__list-item"]}>4 wizyty kontrolne.</li>
              <li className={styles["card__list-item"]}>
                Indywidualne zalecenia i plan żywieniowy dopasowany do każdej
                osoby oddzielnie
              </li>
            </ul>
          </div>
          <div className={styles.card}>
            <h5 className={styles["card__heading"]}>
              Pakiet półroczny dla pary
            </h5>
            <span className={styles["card__price"]}>1800 zł</span>
            <span className={styles["card__difference"]}>
              zamiast 2400 zł - oszczędzasz 600 zł
            </span>
            <ul className={styles["card__list"]}>
              <li className={styles["card__list-item"]}>
                2x jadłospis na 14 dni
              </li>
              <li className={styles["card__list-item"]}>
                12 wizyt kontrolnych
              </li>

              <li className={styles["card__list-item"]}>
                Indywidualne zalecenia i plany żywieniowe dopasowane do każdej
                osoby oddzielnie
              </li>
            </ul>
          </div>
        </div>
        <div className={styles["individual__footer"]}>
          <p className={styles["individual__paragraph"]}>
            W razie potrzeby możesz również zakupić kolejne jadłospisy.
          </p>

          <LinkButton
            navigateTo={RoutePath.CONTACT}
            text="Umów się na wizytę"
          />
        </div>
      </section> */}
		</main>
	);
};
