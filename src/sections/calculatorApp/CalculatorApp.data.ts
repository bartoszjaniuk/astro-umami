const diets = [
  { label: "Dieta 1600 kcal ", link: "#", kcal: "1600" },
  { label: "Miłośnik lasu", link: "#", kcal: "1800" },
  { label: "Viking", link: "#", kcal: "2000" },
  { label: "Człowiek z miasta", link: "#", kcal: "2500" },
  { label: "Włoska robota", link: "#", kcal: "3000" },
];

const activities = [
  {
    label: "pacjent leżący w łóżku",
    value: 1.2,
    description: "brak aktywności fizycznej",
  },
  {
    label: "aktywność fizyczna niska",
    value: 1.4,
    description:
      "praca siedząca, spacery z psem, pojedyńcze treningi w tygodniu",
  },
  {
    label: "aktywność fizyczna umiarkowana",
    value: 1.6,
    description:
      "praca fizyczna lub praca siedząca ale dużo ruchu, 2-3 treningi w tygodniu",
  },
  {
    label: "aktywność fizyczna wysoka",
    value: 1.8,
    description: "praca fizyczna/siedząca i wiele ciękich treningów w tygodniu",
  },
  {
    label: "aktywność fizyczna bardzo wysoka",
    value: 2,
    description: "uprawianie sportu zawodowo",
  },
];

const goals = [
  {
    label: "utrata masy ciała",
    value: -500,
  },
  {
    label: "utrzymanie wagi",
    value: 0,
  },
  {
    label: "przyrost masy ciała",
    value: 500,
  },
];

const goalText = {
  "500": "Przyrost masy ciała",
  "-500": "Utrata wagi",
  "0": "Utrzymanie wagi",
};

export const CalculatorAppData = { diets, activities, goals, goalText };
