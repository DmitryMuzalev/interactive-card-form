import { createContext, useEffect, useState } from "react";
import { checkEmptyField } from "util/fieldValidation";

export const Context = createContext(null);

export function AppContext({ children }) {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [number, setNumber] = useState("");
  const [numberError, setNumberError] = useState("");

  const [CVC, setCVC] = useState("");
  const [CVCError, setCVCError] = useState("");

  const [date, setDate] = useState({
    month: "",
    year: "",
  });
  const [dateError, setDateError] = useState("");

  const [isConfirm, setIsConfirm] = useState(false);

  useEffect(() => {
    isConfirm && checkEmptyField(name) && setNameError("Can't be blank");
    isConfirm && checkEmptyField(number) && setNumberError("Can't be blank");
    isConfirm && checkEmptyField(CVC) && setCVCError("Can't be blank");
    isConfirm &&
      (checkEmptyField(date.month) || checkEmptyField(date.year)) &&
      setDateError("Can't be blank");
  }, [isConfirm]);

  const resetForm = () => {
    setCVC("");
    setName("");
    setNumber("");
    setDate({ month: "", year: "" });
  };

  const state = {
    name,
    setName,
    nameError,
    setNameError,
    number,
    setNumber,
    numberError,
    setNumberError,
    CVC,
    setCVC,
    CVCError,
    setCVCError,
    date,
    setDate,
    dateError,
    setDateError,
    resetForm,
    isConfirm,
    setIsConfirm,
  };

  return <Context.Provider value={state}>{children}</Context.Provider>;
}
