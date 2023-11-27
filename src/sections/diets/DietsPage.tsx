import styles from "./DietsPage.styles.module.scss";
import {
	firstCard,
	fourthCard,
	secondCard,
	thirdCard,
} from "../../components/floating-card/FloatingCard.data";

import { LinkButton } from "../../components/linkButton/LinkButton";
import { DietCard } from "./diet-card/DietCard";

export const DietsPage = () => {
	return (
		<main className={styles.container}>
			<section className={styles["intro"]}>
				<div className={styles["background-shape"]}></div>
				<div className={styles["background-shape--big"]}></div>
				<div className={styles["intro__heading"]}>
					<h2>
						Osiągnij wymarzoną sylwetkę i doskonałe samopoczucie pod okiem
						wykwalifikowanego dietetyka.
					</h2>
				</div>
				<div className={styles["intro__subheading"]}>
					<p>
						Umami to miejsce, gdzie każdego dnia rozprawiam się ze złymi
						nawykami żywieniowymi. W tym miejscu pomogę Ci je zdrowo i
						skutecznie wdrożyć w życie. Tak jak lubisz. Bez wyrzeczeń, bez
						stresu oraz bez efektu jo-jo.
					</p>
				</div>
				<div className={styles["intro__button"]}>
					<LinkButton
						text="Sprawdź gotowe jadłospisy"
						navigateTo="/diety/#jadlospisy"
					/>
				</div>
			</section>
			<section className={styles.diets} id="jadlospisy">
				<DietCard
					title={firstCard.title}
					opisy={firstCard.details.opisy}
					img={firstCard.backgroundUrl}
				/>
				<DietCard
					title={secondCard.title}
					opisy={secondCard.details.opisy}
					img={secondCard.backgroundUrl}
				/>
				<DietCard
					title={thirdCard.title}
					opisy={thirdCard.details.opisy}
					img={thirdCard.backgroundUrl}
				/>
				<DietCard
					title={fourthCard.title}
					opisy={fourthCard.details.opisy}
					img={fourthCard.backgroundUrl}
				/>
			</section>
		</main>
	);
};
