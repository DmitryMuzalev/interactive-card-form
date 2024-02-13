import {
  checkEmptyField,
  checkNotShortValue,
  checkNumbersOnly,
} from "./fieldValidation";

function handlerOnChangeField(setValue, setError, formatterValue) {
  return (e) => {
    const value = e.target.value;
    setValue(formatterValue(value));
    setError("");
  };
}

function handlerOnBlurField(name, setError, min) {
  return (e) => {
    const value = e.target.value;
    if (checkEmptyField(value)) {
      setError("Can't be blank");
    } else if (checkNotShortValue(value, min)) {
      setError(`${name} is too short`);
    } else if (name === "Number") {
      if (!checkNumbersOnly(value)) {
        setError("Wrong format, numbers only");
      }
    }
  };
}
export { handlerOnChangeField, handlerOnBlurField };
