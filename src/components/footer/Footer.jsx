import React from "react";
import styles from "./Footer.module.scss";
import { FacebookIcon } from "../icons/facebook-icon/FacebookIcon";
import { InstagramIcon } from "../icons/instagram-icon/InstagramIcon";
import { TiktokIcon } from "../icons/tiktok-icon/TiktokIcon";
import statuteReference from "/regulamin.pdf";
import { RoutePath } from "../nav/AppRoute.enum";

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles["footer__top"]}>
				<div className={styles["column"]}>
					<h3 className={styles["column__heading"]}>Kontakt</h3>
					<ul className={styles["column-list"]}>
						<li className={styles["column-list__item"]}>Akademia Fitness</li>
						<li className={styles["column-list__item"]}>
							ul. Ocicka 4, 47-400 Racibórz
						</li>
						<li className={styles["column-list__item"]}>Numer telefonu</li>
						<li className={styles["column-list__item"]}>+ 48 570 498 067</li>
						<li className={styles["column-list__item"]}>
							<a href={`${RoutePath.CONTACT}#formularz-kontaktowy`}>
								<button className={styles["column-list__contact"]}>
									Napisz do mnie
								</button>
							</a>
						</li>
					</ul>
					<ul className={styles["media-list"]}>
						<li className={styles["media-list__item"]}>
							<a
								className={styles["media-list-link"]}
								href="https://www.facebook.com/dietetyk.umami/"
								target="_blank"
							>
								<FacebookIcon color="white" />
							</a>
						</li>
						<li className={styles["media-list__item"]}>
							<a
								className={styles["media-list-link"]}
								href="https://www.instagram.com/dietetyk_umami/"
								target="_blank"
							>
								<InstagramIcon color="white" />
							</a>
						</li>
						<li className={styles["media-list__item"]}>
							<a
								className={styles["media-list-link"]}
								href="https://www.tiktok.com/@dietetyk.umami?_t=8oILTb37kQ4&_r=1"
								target="_blank"
							>
								<TiktokIcon color="white" />
							</a>
						</li>
					</ul>
				</div>
				<div className={styles["column"]}>
					<h3 className={styles["column__heading"]}>Oferta</h3>
					<ul className={styles["column-list"]}>
						<li className={styles["column-list__item"]}>
							<a href={RoutePath.OFFER}>Usługi</a>
						</li>
						<li className={styles["column-list__item"]}>
							<a href={RoutePath.MENUS}>Jadłospisy</a>
						</li>
						<li className={styles["column-list__item"]}>
							<a href={RoutePath.PRICE_LIST}>Dieta Indywidualna</a>
						</li>
						<li className={styles["column-list__item"]}>
							<a href={RoutePath.KALKULATOR}>Kalkulator kalorii</a>
						</li>
					</ul>
				</div>
				<div className={styles["column"]}>
					<h3 className={styles["column__heading"]}>O mnie</h3>
					<ul className={styles["column-list"]}>
						<li className={styles["column-list__item"]}>
							<a href={`${RoutePath.ABOUT}`}>Wykształcenie</a>
						</li>
						<li className={styles["column-list__item"]}>
							<a href={`${RoutePath.ABOUT}#certyfikaty`}>Certyfikaty</a>
						</li>
						<li className={styles["column-list__item"]}>
							<a href={`${RoutePath.HOME}#jak-rozpoczac-wspolprace`}>
								Jak rozpocząć współpracę
							</a>
						</li>
					</ul>
				</div>
				<p>
					Dietetyk kliniczny i psychodietetyk. Dietetyk Racibórz i online.
					Indywidualny jadłospis dopasowany do Twoich potrzeb.
				</p>
			</div>

			<div className={styles["footer__bottom"]}>
				<span className={`${styles.copyright} ${styles["copyright--first"]}`}>
					© 2022 Gabinet Dietetyczny UMAMI
				</span>
				<div className={styles.rights}>
					<span className={styles.copyright}>
						<a href={statuteReference} target="_blank">
							Regulamin i RODO
						</a>
					</span>
					<span className={`${styles.copyright} ${styles["copyright--last"]}`}>
						<a href="/polityka-cookies">Polityka prywatności i cookies</a>
					</span>
				</div>
			</div>
		</footer>
	);
};
