import type { CalculatorFormProps } from "./CalculatorApp.types";

const calculateManCPM = ({
  weight,
  height,
  age,
  activity,
  goal,
}: CalculatorFormProps) =>
  Math.round(
    (66.5 +
      13.75 * Number(weight) +
      5.003 * Number(height) -
      6.775 * Number(age)) *
      Number(activity) +
      Number(goal)
  );

const calculateWomanCPM = ({
  weight,
  height,
  age,
  activity,
  goal,
}: CalculatorFormProps) =>
  Math.round(
    (655.1 +
      9.565 * Number(weight) +
      1.85 * Number(height) -
      4.676 * Number(age)) *
      Number(activity) +
      Number(goal)
  );

export const calculateCPM = {
  calculateManCPM,
  calculateWomanCPM,
};
