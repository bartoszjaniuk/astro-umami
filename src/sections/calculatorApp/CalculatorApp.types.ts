export type CalculatorFormProps = {
  weight: string;
  sex: string;
  age: string;
  goal: "-500" | "0" | "500";
  activity: string;
  height: string;
};

export type CalculationProps = {
  calculatedBmi?: number;
  goal?: "-500" | "0" | "500";
  isCalculated?: boolean;
};
