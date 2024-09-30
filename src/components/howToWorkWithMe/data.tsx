import { DecisionIcon } from "../icons/decision-icon/DecisionIcon";
import { LaptopContactIcon } from "../icons/laptop-contact-icon/LaptopContactIcon";
import { TargetIcon } from "../icons/target-icon/TargetIcon";
import { ProtectIcon } from "../icons/protect-icon/ProtectIcon";
import { WeightLifterIcon } from "../icons/weightLifterIcon/WeightLifterIcon";
import { RoutePath } from "../nav/AppRoute.enum";
// import styles from "./HowToWorkWithMe.styles.module.scss";

export const cards = [
	{
		title: "CEL",
		description:
			"Zastanów się co chcesz osiągnąć. Jaki jest Twój cel? Może zmagasz się z jakimś schorzeniem? Chcesz schudnąć - zredukować poziom tkanki tłuszczowej, a może przytyć?",
		icon: <TargetIcon width="80px" height="80px" color="#d2bfa3" />,
	},
	{
		title: "KONTAKT",
		description:
			"Napisz do mnie lub zadzwoń, umówimy się na pierwszą konsultację stacjonarnie lub online. Jeśli posiadasz, wyniki badań krwi również je wyślij do mnie na maila.",
		icon: <LaptopContactIcon width="80px" height="80px" color="#d2bfa3" />,
	},
	// {
	//   title: "DECYZJA",
	//   description:
	//     "Po wyborze pakietu odeślesz do mnie wypełniony dzienniczek i wywiad żywieniowy. Jeśli je masz, wyślij również do mnie aktualne wyniki badań krwi",
	//   icon: <DecisionIcon width="80px" height="80px" />,
	// },
	{
		title: "OPIEKA",
		description: `Po pierwszej konsultacji zdecydujesz jaki plan żywieniowy lub pakiet wybierasz. Ceny znajdziesz w zakładce cennik.`,
		icon: <ProtectIcon width="80px" height="80px" color="#d2bfa3" />,
	},
	{
		title: "DZIAŁANIE",
		description:
			"Profil pacjenta online i aplikacja mobilna – to tam będzie udostępniony Twój jadłospis oraz postępy (istnieje również możliwość, aby wysłać go na Twojego maila). Teraz wszystko zależy od Ciebie, a ja będę Ci kibicować i wspierać!",
		icon: <WeightLifterIcon width="80px" height="80px" />,
	},
];
