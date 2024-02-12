import { createContext, useEffect, useState } from "react";

import {
  cardNumberFormatter,
  CVCFormatter,
  NameFormatter,
} from "util/fieldsFormatters";
import {
  handlerOnBlurDateField,
  handlerOnBlurField,
  handlerOnChangeDateField,
  handlerOnChangeField,
} from "util/fieldsHandlers";
import { checkEmptyField } from "util/fieldValidation";

export const Context = createContext(null);

export function AppContext({ children }) {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [number, setNumber] = useState("");
  const [numberError, setNumberError] = useState("");

  const [CVC, setCVC] = useState("");
  const [CVCError, setCVCError] = useState("");

  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [dateError, setDateError] = useState("");

  const [isConfirm, setIsConfirm] = useState(false);

  useEffect(() => {
    isConfirm && checkEmptyField(name) && setNameError("Can't be blank");
    isConfirm && checkEmptyField(number) && setNumberError("Can't be blank");
    isConfirm && checkEmptyField(CVC) && setCVCError("Can't be blank");
    isConfirm &&
      (checkEmptyField(month) || checkEmptyField(year)) &&
      setDateError("Can't be blank");
  }, [isConfirm]);

  //*_Handlers:
  //_Name:
  const handlerOnChangeName = handlerOnChangeField(
    setName,
    setNameError,
    NameFormatter
  );
  const handlerOnBlurName = handlerOnBlurField("Name", setNameError, 4);

  //_Number:
  const handlerOnChangeNumber = handlerOnChangeField(
    setNumber,
    setNumberError,
    cardNumberFormatter
  );
  const handlerOnBlurNumber = handlerOnBlurField("Number", setNumberError, 19);

  //_CVC:
  const handlerOnChangeCVC = handlerOnChangeField(
    setCVC,
    setCVCError,
    CVCFormatter
  );
  const handlerOnBlurCVC = handlerOnBlurField("CVC", setCVCError, 3);

  //*_Date:

  //_Month:
  const handlerOnChangeMonth = handlerOnChangeDateField(
    "month",
    setMonth,
    setDateError
  );
  const handlerOnBlurMonth = handlerOnBlurDateField(setMonth, setDateError);

  //_Year:
  const handlerOnChangeYear = handlerOnChangeDateField(
    "year",
    setYear,
    setDateError
  );
  const handlerOnBlurYear = handlerOnBlurDateField(setYear, setDateError);

  const resetForm = () => {
    setCVC("");
    setName("");
    setNumber("");
    setMonth("");
    setYear("");
  };

  const state = {
    name,
    nameError,
    number,
    numberError,
    CVC,
    CVCError,
    month,
    year,
    dateError,
    isConfirm,
    resetForm,
    setIsConfirm,
    handlerOnChangeName,
    handlerOnBlurName,
    handlerOnChangeNumber,
    handlerOnBlurNumber,
    handlerOnChangeCVC,
    handlerOnBlurCVC,
    handlerOnChangeMonth,
    handlerOnBlurMonth,
    handlerOnChangeYear,
    handlerOnBlurYear,
  };

  return <Context.Provider value={state}>{children}</Context.Provider>;
}
