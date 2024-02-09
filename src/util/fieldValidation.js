import { cardNumberFormatter } from "./cardNumberFormatter";

//_Functions to check:

export const checkEmptyField = (value) => value.trim() === "";
//setError("Can't be blank");

const checkNumbersOnly = (value) => {
  const v = value.split(" ").join("");
  return /^\d+$/.test(v);
};
//setError("Wrong format, numbers only")

const checkNotShortValue = (value, min) => value.trim().length < min;
// setError(`${name} is too short`)

//*_Handlers:

//_Name:
export const handlerOnChangeName = (e, setValue, setError) => {
  const value = e.target.value;
  const v = value.replace(/[^A-Za-z\s]*$/gi, "").substr(0, 21);
  setValue(v);
  setError("");
};

export const handlerOnBlurName = (e, setError) => {
  const value = e.target.value;
  if (checkEmptyField(value)) {
    setError("Can't be blank");
  } else if (checkNotShortValue(value, 4)) {
    setError("Name is too short");
  }
};

//_Number:
export const handlerOnChangeNumber = (e, setValue, setError) => {
  const value = e.target.value;
  setValue(cardNumberFormatter(value.trim()));
  setError("");
};

export const handlerOnBlurNumber = (e, setError) => {
  const value = e.target.value;
  if (checkEmptyField(value)) {
    setError("Can't be blank");
  } else if (checkNotShortValue(value, 19)) {
    setError("Number is too short");
  } else if (!checkNumbersOnly(value)) {
    setError("Wrong format, numbers only");
  }
};

//_CVC:
export const handlerOnChangeCVC = (e, setValue, setError) => {
  const value = e.target.value;
  const v = value.replace(/[^0-9]/gi, "").substr(0, 4);
  setValue(v);
  setError("");
};

export const handlerOnBlurCVC = (e, setError) => {
  const value = e.target.value;
  if (checkEmptyField(value)) {
    setError("Can't be blank");
  } else if (checkNotShortValue(value, 3)) {
    setError("CVC is too short");
  }
};

//*_Other:

/*
    _Month:

    const handlerInputMonth = (e) => {
    const value = e.target.value;
    const v = value.replace(/[^0-9]/gi, "").substr(0, 2);

    if (+v > 12) {
      setMonth("12");
    } else if (v === "00") {
      setMonth("01");
    } else setMonth(v);
    };
  
    const onBlurInputMonth = (e) => {
    const value = e.target.value;
    if (value.length === 1) {
      if (value !== "0") {
        setMonth(value.padStart(2, "0"));
      } else {
        setMonth("01");
      }
    }
    }; 

   
  ////////////////////////////////////////////////////////////
   _Year:

    const handlerInputYear = (e) => {
    const value = e.target.value;
    const v = value.replace(/[^0-9]/gi, "").substr(0, 2);

    if (v === "00") {
      setYear("01");
    } else setYear(v);
    };

    const onBlurInputYear = (e) => {
    const value = e.target.value;
    if (value.length === 1) {
      if (value !== "0") {
        setYear(value.padStart(2, "0"));
      } else {
        setYear("01");
      }
    }
    };

  
  */
