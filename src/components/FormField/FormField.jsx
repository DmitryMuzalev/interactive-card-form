import clsx from "clsx";
import { useAppContext } from "hook/useAppContext";
import {
  checkEmptyField,
  checkNotShortValue,
  checkNumbersOnly,
} from "util/fieldValidation";

function FormField({
  name,
  value,
  setValue,
  error,
  setError,
  formatter,
  label,
  placeholder,
  min,
}) {
  const { isConfirm } = useAppContext();

  function handlerOnChangeField(e) {
    const value = e.target.value;
    setValue(formatter(value));
    setError("");
  }

  function handlerOnBlurField(e) {
    const value = e.target.value;
    if (checkEmptyField(value)) {
      setError("Can't be blank");
    } else if (checkNotShortValue(value, min)) {
      setError(
        `${
          name === "cvc"
            ? name.toUpperCase()
            : name.charAt(0).toUpperCase() + name.slice(1)
        } is too short`
      );
    } else if (name === "number") {
      if (!checkNumbersOnly(value)) {
        setError("Wrong format, numbers only");
      }
    }
  }

  const styleInput = clsx(isConfirm && error && "errorField");

  return (
    <div className="form__item">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handlerOnChangeField}
        onBlur={handlerOnBlurField}
        className={styleInput}
        autoFocus={name === "name"}
      />
      {isConfirm && error && <span className="errorMessage">{error}</span>}
    </div>
  );
}
export { FormField };
