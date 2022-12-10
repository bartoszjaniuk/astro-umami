import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../components/button/Button";
import { CalculatorIcon } from "../../components/icons/calculator-icon/CalculatorIcon";
import { ManIcon } from "../../components/icons/man-icon/ManIcon";
import { WomanIcon } from "../../components/icons/woman-icon/WomanIcon";
import styles from "./CalculatorApp.styles.module.scss";
import { CalculatorInput } from "./CalculatorInput/CalculatorInput";
import { CalculatorRadioInput } from "./CalculatorRadioInput/CalculatorRadioInput";

import { CalculatorSelectInput } from "./CalculatorSelectInput/CalculatorSelectInput";
import { ErrorMessage } from "@hookform/error-message";
import { FormErrorMessage } from "../../components/input/ErrorMessage";
import { MessageIcon } from "../../components/icons/message-icon/MessageIcon";
import { RunnerIcon } from "../../components/icons/runner-icon/RunnerIcon";
import { calculateCPM } from "./CalculatorApp.utils";
import { BrainIcon } from "../../components/icons/brain-icon/BrainIcon";
import { TargetIcon } from "../../components/icons/target-icon/TargetIcon";
import type {
  CalculationProps,
  CalculatorFormProps,
} from "./CalculatorApp.types";

import imgReadingReference from "/assets/reading.svg";
import imgExamReference from "/assets/exams.svg";

import { CalculatorAppData } from "./CalculatorApp.data";

export const CalculatorApp = () => {
  const { activities, diets, goalText, goals } = CalculatorAppData;
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<CalculatorFormProps>({ mode: "onTouched" });

  const [calculations, setCalculations] = useState<CalculationProps>({
    calculatedBmi: 0,
    goal: "0",
    isCalculated: false,
  });

  const calculateBMI = (data: CalculatorFormProps) => {
    const { activity, age, goal, sex, weight, height } = data;

    if (+sex) {
      setCalculations({
        isCalculated: true,
        goal: goal,
        calculatedBmi: calculateCPM.calculateManCPM({
          weight,
          height,
          activity,
          age,
          sex,
          goal,
        }),
      });
    } else {
      setCalculations({
        isCalculated: true,
        goal: goal,
        calculatedBmi: calculateCPM.calculateWomanCPM({
          weight,
          height,
          activity,
          age,
          sex,
          goal,
        }),
      });
    }

    reset();
  };

  return (
    <main className={styles.container}>
      <span className={styles["background-shape"]} />
      <span className={styles["background-shape--small"]} />
      <span className={styles["background-shape--very-small"]} />
      <span className={styles["background-shape--medium"]} />
      <div className={styles.calculator}>
        <h3 className={styles["calculator__heading"]}>
          Oblicz dzienne zapotrzebowanie kaloryczne:
        </h3>

        {!calculations.isCalculated && (
          <div className={styles["calculator__content"]}>
            <form onSubmit={handleSubmit(calculateBMI)} className={styles.form}>
              <div className={styles["radio-inputs"]}>
                <div className={styles["radio-inputs__left"]}>Płeć:</div>
                <CalculatorRadioInput
                  id="man"
                  type="radio"
                  name="sex"
                  value="1"
                  label={<ManIcon width="50px" height="50px" />}
                  register={register}
                  errors={errors}
                  rules={{ required: "Pole jest wymagane" }}
                />
                <CalculatorRadioInput
                  id="woman"
                  type="radio"
                  name="sex"
                  value="0"
                  label={<WomanIcon width="50px" height="50px" />}
                  register={register}
                  errors={errors}
                  rules={{
                    required: "Pole jest wymagane",
                  }}
                />
              </div>
              <CalculatorInput
                id="weight"
                step="0.1"
                type="number"
                name="weight"
                label="Masa ciała"
                placeholder="kg"
                register={register}
                errors={errors}
                rules={{
                  required: "Pole jest wymagane",
                  pattern: {
                    value: /^(0|[1-9]\d*)(\.\d+)?$/,
                    message: "Nieprawidłowa waga",
                  },
                }}
              />
              <CalculatorInput
                id="height"
                type="number"
                name="height"
                label="Wzrost"
                placeholder="cm"
                register={register}
                errors={errors}
                rules={{
                  required: "Pole jest wymagane",
                  pattern: {
                    value: /^(0|[1-9]\d*)(\.\d+)?$/,
                    message: "Nieprawidłowy wzrost",
                  },
                }}
              />
              <CalculatorInput
                id="age"
                type="number"
                name="age"
                label="Wiek"
                placeholder=""
                register={register}
                errors={errors}
                rules={{
                  required: "Pole jest wymagane",
                  pattern: {
                    value: /^(0|[1-9]\d*)(\.\d+)?$/,
                    message: "Nieprawidłowy wiek",
                  },
                }}
              />

              <div className={styles["radio-inputs"]}>
                <div className={styles["radio-inputs__left"]}>Aktywność:</div>
                <CalculatorSelectInput
                  id="activity"
                  name="activity"
                  label="aktywność"
                  placeholder="Aktywność"
                  register={register}
                  errors={errors}
                  rules={{ required: "Pole jest wymagane" }}
                  options={activities}
                />
              </div>
              <ErrorMessage
                errors={errors}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                name={"activity"}
                render={({ message }) => (
                  <FormErrorMessage className={styles["error-message"]}>
                    {message}
                  </FormErrorMessage>
                )}
              />
              <div className={styles["radio-inputs"]}>
                <div className={styles["radio-inputs__left"]}>Cel:</div>
                <CalculatorSelectInput
                  id="goal"
                  name="goal"
                  label="cel"
                  placeholder="Cel"
                  register={register}
                  errors={errors}
                  rules={{ required: "Pole jest wymagane" }}
                  options={goals}
                />
              </div>
              <ErrorMessage
                errors={errors}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                name={"goal"}
                render={({ message }) => (
                  <FormErrorMessage className={styles["error-message"]}>
                    {message}
                  </FormErrorMessage>
                )}
              />
              <div className={styles["submit-button"]}>
                <Button
                  className={styles["submit-button__content"]}
                  disabled={!isValid}
                  type="submit"
                >
                  {!isSubmitting && (
                    <CalculatorIcon
                      height="32px"
                      width="32px"
                      color="#ffffff"
                    />
                  )}
                  {isSubmitting ? "Trwa wysyłanie wiadomości..." : "Oblicz"}
                </Button>{" "}
              </div>
            </form>
            <div className={styles.notes}>
              <img
                className={styles["notes__image"]}
                src={imgReadingReference}
                alt="Kobieta czytająca instrukcję"
              />
            </div>
          </div>
        )}
        {calculations.isCalculated && (
          <div className={styles["calculator__calculated"]}>
            <div className={styles["calculated__heading"]}>
              <div className={styles["calculated__heading__inner"]}>
                <TargetIcon height="64px" width="64px" />
                <h3 className={styles["calculated__heading--h3"]}>Twój cel:</h3>
              </div>
              <p className={styles["calculated__heading--result"]}>
                {" "}
                {calculations.goal && goalText[calculations.goal]}
              </p>
            </div>
            <div className={styles["calculated__result"]}>
              <div className={styles["calculated__heading__inner"]}>
                <BrainIcon width="64px" height="64px" />
                <h3 className={styles["calculated__heading--h3"]}>Wynik: </h3>
              </div>
              <span className={styles["calculated__heading--result"]}>
                {calculations.calculatedBmi} kcal
              </span>{" "}
            </div>

            <div className={styles["calculated__image-container"]}>
              <img
                className={styles["calculated__image"]}
                src={imgExamReference}
                alt="Kobieta czytająca instrukcję"
              />
            </div>
            <div className={styles["btn-group"]}>
              <div className={styles["recalculate-button"]}>
                <Button
                  onClick={() => setCalculations({ isCalculated: false })}
                  className={styles["submit-button__content"]}
                  type="button"
                >
                  <MessageIcon height="32px" width="32px" color="#ffffff" />
                  Napisz do mnie
                </Button>
              </div>
              <div className={styles["recalculate-button"]}>
                <Button
                  onClick={() => setCalculations({ isCalculated: false })}
                  className={styles["submit-button__content"]}
                  type="button"
                >
                  <CalculatorIcon height="32px" width="32px" color="#ffffff" />
                  Oblicz ponownie
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      <aside className={styles["aside-navigation"]}>
        <img
          className={styles["aside-navigation__image"]}
          src="https://cdn.pixabay.com/photo/2016/11/19/11/38/avocado-1838785_960_720.jpg"
          alt="Warzywa na smoothie"
        />
        <h3 className={styles["aside-navigation__heading"]}>
          Zobacz także dostępne diety:
        </h3>
        <ul className={styles["aside-navigation-list"]}>
          {diets.map((diet, index) => (
            <a
              className={styles["aside-navigation-list__link"]}
              key={diet.label}
              href={diet.link}
            >
              <li className={styles["aside-navigation-list__item"]}>
                <span className={styles["aside-navigation-list__count"]}>
                  0{index + 1}
                </span>
                <span className={styles["aside-navigation-list__label"]}>
                  {diet.label}
                </span>
                <span className={styles["aside-navigation-list__kcal"]}>
                  {diet.kcal} kcal
                </span>
              </li>
            </a>
          ))}
        </ul>
      </aside>
      <div className={styles["calculations"]}>
        <div className={styles["row"]}>
          <div className={styles["row__heading"]}>
            <MessageIcon height="64px" width="64px" />
            <h4 className={styles["row__title"]}>
              Całkowita Przemiana Materii (CPM)
            </h4>
          </div>
          <p className={styles["row__short-desc"]}>
            Pewnie zastanawiasz się skąd wiem jak obliczyć dla Ciebie
            zapotrzebowanie kaloryczne
          </p>
          <p className={styles["row__content"]}>
            Całkowitą przemianę materii nazywamy sumę dobowych wydatków
            energetycznych związanych z metabolizmem podstawowym, niezbędnym do
            utrzymanaia podstawowych funkcji życiowych (PPM) i aktywnością
            fizyczną (współczynnikiem PAL z ang. physical activity level). PAL
            uwzględnia aktywność związaną z uprawianiem sportu oraz tą
            polegającą na wykonywaniu codziennych obowiązków. CPM odpowiada
            całkowitemu zapotrzebowaniu na energię w ciągu dnia, wyrażona w
            kilokaloriach.
          </p>
        </div>
        <div className={styles["row"]}>
          <div className={styles["row__heading"]}>
            <CalculatorIcon height="64px" width="64px" />
            <h4 className={styles["row__title"]}>Wzór</h4>
          </div>

          <div className={styles["row__pattern"]}>
            <p className={styles["row__pattern--inner"]}>
              Całkowita Przemiana Materii (CPM) = PPM x współczynnik aktywności
              fizycznej PAL
            </p>
          </div>
        </div>
      </div>

      <div className={styles["details"]}>
        <div className={styles["details__header"]}>
          <RunnerIcon height="64px" width="64px" />
          <p>Aktywności oraz ich intensywność</p>
        </div>
        <table className={styles["table-resp"]}>
          <thead>
            <tr>
              <th>Aktywność</th>
              <th>Natęzenie</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity) => (
              <tr key={activity.value}>
                <td>{activity.label}</td>
                <td>{activity.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};
