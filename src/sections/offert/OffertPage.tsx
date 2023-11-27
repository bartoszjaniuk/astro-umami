import styles from "./OffertPage.styles.module.scss";
import imageOffertRef from "/assets/aleksandra_offert.png";
import { Icon } from "@iconify/react";
import { OffertItem } from "./offertItem/OffertItem";
import { useState } from "react";
import { LinkButton } from "../../components/linkButton/LinkButton";

const panels = [
	{
		label: "Odchudzanie",
		icon: <Icon fontSize="2.3rem" icon="game-icons:weight-scale" />,
		content:
			"Ze mną osiągniesz szczupłą sylwetkę nie na lato, tylko na lata. Dopasuję dla Ciebie dietę bez wyrzeczeń. Nauczę Cię jak z diety zrobić styl życia i jak możesz skomponować posiłki zgodne z Twoim zapotrzebowaniem kalorycznym. Dostaniesz jadłospis, w którym użyte produkty oraz ilość posiłków zależą tylko i wyłącznie od Ciebie. Zbędne kilogramy już nigdy do Ciebie nie wrócą!",
	},
	{
		label: "Dietoterapia w chorobie",
		icon: <Icon fontSize="2.3rem" icon="game-icons:health-increase" />,
		content:
			"Złagodzisz lub całkowicie wyeliminujesz objawy swojej choroby. Podpowiem, które produkty są dla Ciebie odpowiednie, a które należy wyeliminować z diety. Przejrzę również Twoje aktualne wyniki badań krwi.",
		listTitle: "Pomogę Ci w tych schorzeniach:",
		listItems_1: [
			"choroby układu krążenia (miażdżyca, dyslipidemia, nadciśnienie tętnicze),",
			"choroby tarczycy: niedoczynność, nadczynność, choroba Hashimoto i Gravesa-Basedowa",
			"choroby układu pokarmowego: refluks, zespół jelita drażliwego (IBS), choroba wrzodowa, chorobaLeśniewskiego – Crohna, celiakia, stłuszczenie wątroby, przewlekłe zaparcia, problemy trawienne, SIBO,",
			"insulinooporność, cukrzyca typu II,",
			"dna moczanowa,",
		],
		listItems_2: [
			"osteoporoza",
			"hipercholesterolemia",
			"zaburzenia odżywiania,",
			"problemy skórne,",
			"nietolerancje pokarmowe",
		],
	},
	{
		label: "Dieta w alergiach pokarmowych",
		icon: <Icon fontSize="2.3rem" icon="game-icons:life-bar" />,
		content: `Wyeliminujemy produkty, które Ci szkodzą. Pokażę Ci jak komponować smaczne posiłki bez produktów alergizujących, po których będziesz się świetnie czuć. 
      Alergia nie będzie dla Ciebie już tak kłopotliwa jak dotychczas!`,
	},
	{
		label: "Dieta wegetariańska ",
		icon: <Icon fontSize="2.3rem" icon="game-icons:fruit-bowl" />,
		content:
			"Skomponuję dla Ciebie zdrową i zbilansowaną dietę nawet jeśli nie jesz mięsa. Pokażę Ci pewne połączenia produktów, które zapewnią Ci odpowiednie wartości odżywcze, a dalej będziesz cieszyć się jedzeniem. Powiem Ci jak prowadzić dietę bez mięsa tak, aby uniknąć wielu niedoborów.",
	},
	{
		label: "Dieta dla kobiet w ciąży i mam",
		icon: <Icon fontSize="2.3rem" icon="game-icons:baby-bottle" />,
		content:
			"Zadbam o wasze zdrowie jedząc tak, aby dostarczyć Wam wszelkich niezbędnych składników odżywczych – zarówno w okresie ciąży, jak i laktacji. Rozwiejesz wątpliwości co do szkodliwych produktów oraz wpływu Twojej diety na samopoczucie i zdrowie Twojego dziecka. Dowiesz się też, jak utrzymać zdrową wagę i wrócić do formy jako młoda mama.",
	},
	{
		label: "Dieta dla par",
		icon: <Icon fontSize="2.3rem" icon="game-icons:lovers" />,
		content:
			"Osiągniecie swój cel razem, w parze dzięki jadłospisom, które idealnie pasują do każdego z Was osobno. Oszczędzicie czas, gotując te same posiłki, ale z porcjami dobranymi dokładnie do Waszych celów. Każde z Was otrzyma swój plan, który będzie dopasowany do Waszego indywidualnego poziomu i upodobań.",
	},
];

export const OffertPage = () => {
	const [activeTab, setActiveTab] = useState(-2);

	const activateTab = (index: number) => {
		setActiveTab((prev) => (prev === index ? -1 : index));
	};

	return (
		<main className={styles.offert}>
			<section className={styles.introduction}>
				<div className={styles["content"]}>
					<h2 className={styles["content__heading"]}>DIETA ONLINE.</h2>
					<h5 className={styles["content__heading--secondary"]}>
						Zrób pierwszy krok juz dziś, nie jutro.
					</h5>
					<div className={styles["content__description"]}>
						Pomogę Ci schudnąć bez wyrzeczeń nawet jeśli zmagasz się z jakimiś
						problemami zdrowotnymi. Dzięki mojej pomocy będziesz mieć więcej
						energii i polepszysz swoje samopoczucie oraz stan zdrowia!
					</div>

					<LinkButton text="Sprawdź ofertę" navigateTo="/oferta/#moje-uslugi" />
				</div>
				<div className={styles["image"]}>
					<img src={imageOffertRef} alt="Aleksandra Kajstura-Janiuk" />
				</div>
			</section>
			<section className={styles["tags-strip"]}>
				<ul className={styles["tags-strip-list"]}>
					<li className={styles["tags-strip-list__item"]}>
						<Icon icon="game-icons:talk" />
						Konsultacje dietetyczne online
					</li>
					<li className={styles["tags-strip-list__item"]}>
						<Icon icon="game-icons:notebook" />
						Indywidualny plan żywieniowy
					</li>
					<li className={styles["tags-strip-list__item"]}>
						<Icon icon="game-icons:beech" />
						Edukacja żywieniowa
					</li>
				</ul>
			</section>

			<section className={styles.plan}>
				<h2 className={styles["plan__heading"]}>Usługi</h2>
				<p className={styles["plan__heading-secondary"]} id="moje-uslugi">
					Nie wiesz co wybrać? Skontaktuj się ze mną i wszystko razem ustalimy.
				</p>
				<div className={styles["plan__content"]} role="tablist">
					{panels.map((panel, index) => (
						<OffertItem
							key={index}
							activeTab={activeTab}
							index={index}
							{...panel}
							activateTab={() => activateTab(index)}
						/>
					))}
				</div>

				<div className={styles["plan__footer"]}>
					<LinkButton
						text="Sprawdź dostępne opcje współpracy"
						navigateTo="/cennik"
						isInverted
					/>
				</div>
			</section>
		</main>
	);
};
