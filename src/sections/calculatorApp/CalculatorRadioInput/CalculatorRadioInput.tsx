import { ErrorMessage } from "@hookform/error-message";
import { FormErrorMessage } from "../../../components/input/ErrorMessage";
import type { InputProps } from "../../../components/input/Input";
import type { CalculatorFormProps } from "../CalculatorApp";
import styles from "./CalculatorRadioInput.styles.module.scss";

export const CalculatorRadioInput = ({
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
      <label className={styles["radio-label"]} htmlFor={id}>
        <input
          placeholder={placeholder}
          value={value}
          type={type}
          name={name}
          className={styles["radio-input"]}
          id={id}
          aria-invalid={hasError}
          {...props}
          {...(register && register(name, rules))}
        />
        <span className={styles.label}> {label}</span>
      </label>
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
