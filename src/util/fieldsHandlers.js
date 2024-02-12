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

function handlerOnChangeDateField(name, setValue, setError) {
  return (e) => {
    setError("");
    const value = e.target.value;
    const v = value.replace(/[^0-9]/gi, "").substr(0, 2);
    if (v === "00") {
      setValue("01");
    } else if (name === "month" && +v > 12) {
      setValue("12");
    } else {
      setValue(v);
    }
  };
}

function handlerOnBlurDateField(setValue, setError) {
  return (e) => {
    const value = e.target.value;
    if (value.length === 1) {
      if (value !== "0") {
        setValue(value.padStart(2, "0"));
      } else {
        setValue("01");
      }
    }
    if (checkEmptyField(value)) {
      setError("Can't be blank");
    }
  };
}

export {
  handlerOnChangeField,
  handlerOnBlurField,
  handlerOnChangeDateField,
  handlerOnBlurDateField,
};
