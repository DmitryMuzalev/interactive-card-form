//_Functions to check:

export const checkEmptyField = (value) => value.trim() === "";
//setError("Can't be blank");

export const checkNumbersOnly = (value) => {
  const v = value.split(" ").join("");
  return /^\d+$/.test(v);
};
//setError("Wrong format, numbers only")

export const checkNotShortValue = (value, min) => value.trim().length < min;
// setError(`${name} is too short`)

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
