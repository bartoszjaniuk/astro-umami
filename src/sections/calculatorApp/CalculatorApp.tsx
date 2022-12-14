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
import { RoutePath } from "../../components/nav/AppRoute.enum";

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
                <div className={styles["radio-inputs__left"]}>P??e??:</div>
                <CalculatorRadioInput
                  id="man"
                  type="radio"
                  name="sex"
                  value="1"
                  label={<ManIcon className={styles["radio-inputs__icon"]} />}
                  register={register}
                  errors={errors}
                  rules={{ required: "Pole jest wymagane" }}
                />
                <CalculatorRadioInput
                  id="woman"
                  type="radio"
                  name="sex"
                  value="0"
                  label={<WomanIcon className={styles["radio-inputs__icon"]} />}
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
                label="Masa cia??a"
                placeholder="kg"
                register={register}
                errors={errors}
                rules={{
                  required: "Pole jest wymagane",
                  pattern: {
                    value: /^(0|[1-9]\d*)(\.\d+)?$/,
                    message: "Nieprawid??owa waga",
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
                    message: "Nieprawid??owy wzrost",
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
                    message: "Nieprawid??owy wiek",
                  },
                }}
              />

              <div className={styles["radio-inputs"]}>
                <div className={styles["radio-inputs__left"]}>Aktywno????:</div>
                <CalculatorSelectInput
                  id="activity"
                  name="activity"
                  label="aktywno????*"
                  placeholder="Aktywno????"
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
                      className={styles["icon-size"]}
                      color="#ffffff"
                    />
                  )}
                  {isSubmitting ? "Trwa wysy??anie wiadomo??ci..." : "Oblicz"}
                </Button>{" "}
              </div>
              <span className={styles.important}>
                {" "}
                *{" "}
                <a
                  className={styles["move-into"]}
                  href={`${RoutePath.KALKULATOR}/#aktywnosci`}
                >
                  sprawd?? poni??ej
                </a>{" "}
                do jakiego rodzaju aktywno??ci w ci??gu dnia si?? zaliczasz.
              </span>
            </form>
            <div className={styles.notes}>
              <img
                className={styles["notes__image"]}
                src={imgReadingReference}
                alt="Kobieta czytaj??ca instrukcj??"
              />
            </div>
          </div>
        )}
        {calculations.isCalculated && (
          <div className={styles["calculator__calculated"]}>
            <div className={styles["calculated__heading"]}>
              <div className={styles["calculated__heading__inner"]}>
                <TargetIcon className={styles["icon-size-big"]} />
                <h3 className={styles["calculated__heading--h3"]}>Tw??j cel:</h3>
              </div>
              <p className={styles["calculated__heading--result"]}>
                {" "}
                {calculations.goal && goalText[calculations.goal]}
              </p>
            </div>
            <div className={styles["calculated__result"]}>
              <div className={styles["calculated__heading__inner"]}>
                <BrainIcon className={styles["icon-size-big"]} />
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
                alt="Kobieta czytaj??ca instrukcj??"
              />
            </div>
            <div className={styles["btn-group"]}>
              <div className={styles["recalculate-button"]}>
                <a
                  className={styles["recalculate-button__link"]}
                  href={RoutePath.CONTACT}
                >
                  <Button
                    className={styles["submit-button__content"]}
                    type="button"
                  >
                    <MessageIcon
                      className={styles["icon-size"]}
                      color="#ffffff"
                    />
                    Napisz do mnie
                  </Button>
                </a>
              </div>
              <div className={styles["recalculate-button"]}>
                <Button
                  onClick={() => setCalculations({ isCalculated: false })}
                  className={styles["submit-button__content"]}
                  type="button"
                >
                  <CalculatorIcon
                    className={styles["icon-size"]}
                    color="#ffffff"
                  />
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
          Wybierz sw??j jad??ospis:
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

                <a className={styles["link-button"]} href={RoutePath.MENUS}>
                  Sprawd??
                </a>
              </li>
            </a>
          ))}
        </ul>

        <p className={styles["aside-navigation-list__paragraph"]}>
          Chcia??by?? otrzyma?? indywidualn?? diet?? i zalecenia ??ywieniowe
          przygotowane tylko dla Ciebie? <br /> Nie wahaj si?? i napisz do mnie
          ju?? teraz!
        </p>
      </aside>
      <div className={styles["calculations"]}>
        <div className={styles["row"]}>
          <div className={styles["row__heading"]}>
            <MessageIcon className={styles["icon-size-big"]} />
            <h4 className={styles["row__title"]}>
              Ca??kowita Przemiana Materii (CPM)
            </h4>
          </div>
          <p className={styles["row__short-desc"]}>
            Pewnie zastanawiasz si?? sk??d wiem jak obliczy?? dla Ciebie
            zapotrzebowanie kaloryczne
          </p>
          <p className={styles["row__content"]}>
            Ca??kowit?? przemian?? materii nazywamy sum?? dobowych wydatk??w
            energetycznych zwi??zanych z metabolizmem podstawowym, niezb??dnym do
            utrzymanaia podstawowych funkcji ??yciowych (PPM) i aktywno??ci??
            fizyczn?? (wsp????czynnikiem PAL z ang. physical activity level). PAL
            uwzgl??dnia aktywno???? zwi??zan?? z uprawianiem sportu oraz t??
            polegaj??c?? na wykonywaniu codziennych obowi??zk??w. CPM odpowiada
            ca??kowitemu zapotrzebowaniu na energi?? w ci??gu dnia, wyra??ona w
            kilokaloriach.
          </p>
        </div>
        <div className={styles["row"]}>
          <div className={styles["row__heading"]}>
            <CalculatorIcon className={styles["icon-size-big"]} />
            <h4 className={styles["row__title"]}>Wz??r</h4>
          </div>

          <div className={styles["row__pattern"]}>
            <p className={styles["row__pattern--inner"]}>
              Ca??kowita Przemiana Materii (CPM) = PPM x wsp????czynnik aktywno??ci
              fizycznej PAL
            </p>
          </div>
        </div>
      </div>

      <div className={styles["details"]} id="aktywnosci">
        <div className={styles["details__header"]}>
          <RunnerIcon className={styles["icon-size-big"]} />
          <p>Aktywno??ci oraz ich intensywno????</p>
        </div>
        <table className={styles["table-resp"]}>
          <thead>
            <tr>
              <th>Aktywno????</th>
              <th>Nat??zenie</th>
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
