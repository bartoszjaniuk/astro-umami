import { ErrorMessage } from "@hookform/error-message";
import { FormErrorMessage } from "../../../components/input/ErrorMessage";
import type { InputProps } from "../../../components/input/Input";
import type { CalculatorFormProps } from "../CalculatorApp";
import styles from "./CalculatorInput.styles.module.scss";

export const CalculatorInput = ({
  id,
  name,
  label,
  type = "text",
  className = "",
  placeholder,
  errors,
  register,
  rules,
  isTextArea,
  value,
  useFormGroup = true,
  ...props
}: InputProps<CalculatorFormProps>) => {
  const hasError = !!errors;

  return (
    <>
      {useFormGroup && (
        <div className={styles["form-group"]}>
          <div className={styles["column-left"]}>
            <label className={styles["form-label"]} htmlFor={id}>
              {`${label}:`}
            </label>
          </div>
          <div className={styles["column-right"]}>
            <input
              placeholder={placeholder}
              value={value}
              type={type}
              name={name}
              className={styles["form-input"]}
              id={id}
              aria-invalid={hasError}
              {...props}
              {...(register && register(name, rules))}
            />
          </div>
        </div>
      )}
      {!useFormGroup && (
        <>
          <div className={styles["column-left"]}>
            <label className={styles["form-lablel"]} htmlFor={id}>
              {label}
            </label>
          </div>
          <div className={styles["column-right"]}>
            <input
              placeholder={placeholder}
              value={value}
              type={type}
              name={name}
              className={styles["form-input"]}
              id={id}
              aria-invalid={hasError}
              {...props}
              {...(register && register(name, rules))}
            />
          </div>
        </>
      )}
      <ErrorMessage
        errors={errors}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        name={name as any}
        render={({ message }) => (
          <FormErrorMessage
            className={`${styles["my-1"]} ${styles["error-message"]}`}
          >
            {message}
          </FormErrorMessage>
        )}
      />
    </>
  );
};
