import { DecisionIcon } from "../icons/decision-icon/DecisionIcon";
import { LaptopContactIcon } from "../icons/laptop-contact-icon/LaptopContactIcon";
import { TargetIcon } from "../icons/target-icon/TargetIcon";
import { ProtectIcon } from "../icons/protect-icon/ProtectIcon";
import { WeightLifterIcon } from "../icons/weightLifterIcon/WeightLifterIcon";

export const cards = [
  {
    title: "CEL",
    description:
      "Zastanów się co chcesz osiągnąć. Jaki jest Twój cel? Chcesz schudnąć, zredukować poziom tkanki tłuszczowej, a może przytyć?",
    icon: <TargetIcon width="80px" height="80px" />,
  },
  {
    title: "KONTAKT",
    description:
      "Napisz do mnie, a ja wyślę do Ciebie całą ofertę oraz dzienniczek i wywiad żywieniowy. Po wyborze pakietu odeślesz do mnie wypełniony dzienniczek i wywiad żywieniowy Jeśli posiadasz, wyniki badań krwi równie je wyślij.",
    icon: <LaptopContactIcon width="80px" height="80px" />,
  },
  // {
  //   title: "DECYZJA",
  //   description:
  //     "Po wyborze pakietu odeślesz do mnie wypełniony dzienniczek i wywiad żywieniowy. Jeśli je masz, wyślij również do mnie aktualne wyniki badań krwi",
  //   icon: <DecisionIcon width="80px" height="80px" />,
  // },
  {
    title: "OPIEKA",
    description:
      "Wybierzesz czy chcesz współpracować ze mną mailowo czy spotykać się co jakiś czas na spotkaniu online.",
    icon: <ProtectIcon width="80px" height="80px" />,
  },
  {
    title: "DZIAŁANIE",
    description:
      "Profil pacjenta online i aplikacja mobilna – to tam będzie udostępniony Twój jadłospis (istnieje również możliwość, aby wysłać go na Twojego maila). Teraz wszystko zależy od Ciebie, a ja będę Ci kibicować i wspierać.",
    icon: <WeightLifterIcon width="80px" height="80px" />,
  },
];
