const diets = [
  { label: "Jadłospis 1600 kalorii", link: "#", kcal: "1600" },
  { label: "Jadłospis 1800 kalorii", link: "#", kcal: "1800" },
  { label: "Jadłospis 2000 kalorii", link: "#", kcal: "2000" },
  { label: "Jadłospis 2200 kalorii", link: "#", kcal: "2500" },
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
    label: "chcę schudnąć",
    value: -500,
  },
  {
    label: "chcę utrzymać masę ciała",
    value: 0,
  },
  {
    label: "chcę przytyć",
    value: 500,
  },
];

const goalText = {
  "500": "Przyrost masy ciała",
  "-500": "Utrata wagi",
  "0": "Utrzymanie wagi",
};

export const CalculatorAppData = { diets, activities, goals, goalText };
