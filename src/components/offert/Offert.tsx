import styles from "./Offert.styles.module.scss";
import { useInView } from "react-intersection-observer";
import introductionImgReference from "/assets/ola.png";
import { LinkButton } from "../linkButton/LinkButton";
import { RoutePath } from "../nav/AppRoute.enum";

export const Offert = () => {
	const { ref: introductionRef, inView: introductionInView } = useInView({
		triggerOnce: true,
	});

	return (
		<section className={styles.container}>
			<span className={styles["container__inner-element"]} />
			<span className={styles["container__inner-element--medium"]} />
			<span className={styles["container__inner-element--big"]} />
			<div
				ref={introductionRef}
				className={`${
					introductionInView
						? `slide-from-left ${styles["introduction--visible"]}`
						: ""
				} ${styles["introduction"]}`}
			>
				<div className={styles["introduction__heading"]}>
					<h1 className={styles["introduction__heading--h2"]}>
						Cześć! Nazywam się
					</h1>
					<h2
						className={`${styles["introduction__heading--h2"]}
							${styles["introduction__heading--bold"]}`}
					>
						Aleksandra Kajstura-Janiuk
					</h2>
				</div>
				<p className={styles["introduction__content"]}>
					Zdrowy styl życia, zrównoważona dieta i trochę aktywności fizycznej -
					klucz do Twojej wymarzonej sylwetki!
				</p>
				<LinkButton text="Dowiedz się więcej" navigateTo={RoutePath.ABOUT} />
			</div>
			<div
				className={`${
					introductionInView
						? `slide-from-right ${styles["photo--visible"]}`
						: ""
				} ${styles["photo"]}`}
			>
				<img
					className={styles["photo__img"]}
					src={introductionImgReference}
					alt="Człowiek wskazujący palcem na opis"
				/>
			</div>
		</section>
	);
};
