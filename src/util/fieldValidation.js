const checkEmptyField = (value) => value.trim() === "";

const checkNumbersOnly = (value) => {
  const v = value.split(" ").join("");
  return /^\d+$/.test(v);
};

const checkNotShortValue = (value, min) => value.trim().length < min;

export { checkEmptyField, checkNumbersOnly, checkNotShortValue };
