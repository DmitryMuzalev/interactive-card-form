import { createContext, useState } from "react";
import { cardNumberFormatter } from "util/cardNumberFormatter";
import {
  checkEmptyField,
  checkNumbersOnly,
  checkNotShortValue,
} from "util/fieldValidation";

export const Context = createContext(null);

export function AppContext({ children }) {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [number, setNumber] = useState("");
  const [numberError, setNumberError] = useState("");

  const [CVC, setCVC] = useState("");
  const [CVCError, setCVCError] = useState("");

  const [isConfirm, setIsConfirm] = useState(false);

  //*_Handlers:
  //_Name:
  const handlerOnChangeName = (e) => {
    const value = e.target.value;
    const v = value.replace(/[^A-Za-z\s]*$/gi, "").substr(0, 21);
    setName(v);
    setNameError("");
  };

  const handlerOnBlurName = (e) => {
    const value = e.target.value;
    if (checkEmptyField(value)) {
      setNameError("Can't be blank");
    } else if (checkNotShortValue(value, 4)) {
      setNameError("Name is too short");
    }
  };

  //_Number:
  const handlerOnChangeNumber = (e) => {
    const value = e.target.value;
    setNumber(cardNumberFormatter(value.trim()));
    setNumberError("");
  };

  const handlerOnBlurNumber = (e) => {
    const value = e.target.value;
    if (checkEmptyField(value)) {
      setNumberError("Can't be blank");
    } else if (checkNotShortValue(value, 19)) {
      setNumberError("Number is too short");
    } else if (!checkNumbersOnly(value)) {
      setNumberError("Wrong format, numbers only");
    }
  };

  //_CVC:
  const handlerOnChangeCVC = (e) => {
    const value = e.target.value;
    const v = value.replace(/[^0-9]/gi, "").substr(0, 4);
    setCVC(v);
    setCVCError("");
  };

  const handlerOnBlurCVC = (e) => {
    const value = e.target.value;
    if (checkEmptyField(value)) {
      setCVCError("Can't be blank");
    } else if (checkNotShortValue(value, 3)) {
      setCVCError("CVC is too short");
    }
  };

  const resetForm = () => {
    setCVC("");
    setName("");
    setNumber("");
  };

  const state = {
    name,
    nameError,
    number,
    numberError,
    CVC,
    CVCError,
    isConfirm,
    resetForm,
    setIsConfirm,
    handlerOnChangeName,
    handlerOnBlurName,
    handlerOnChangeNumber,
    handlerOnBlurNumber,
    handlerOnChangeCVC,
    handlerOnBlurCVC,
  };

  return <Context.Provider value={state}>{children}</Context.Provider>;
}
