import { FormField } from "components/FormField/FormField";
import { Button } from "components/Button/Button";
import { useAppContext } from "hook/useAppContext";
import { FormDateFields } from "components/FormDateFields/FormDateFields";
import {
  nameFormatter,
  numberFormatter,
  CVCFormatter,
} from "util/fieldsFormatters";

function Form() {
  const {
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
    dateError,
    resetForm,
    setIsConfirm,
    setIsSent,
  } = useAppContext();

  const handlerOnSubmit = (e) => {
    e.preventDefault();
    setIsConfirm(true);
    if (!nameError && !numberError && !CVCError && !dateError) {
      resetForm();
      setIsSent(true);
    }
  };

  return (
    <form className="form" autoComplete="off" onSubmit={handlerOnSubmit}>
      <FormField
        name="name"
        value={name}
        setValue={setName}
        error={nameError}
        setError={setNameError}
        formatter={nameFormatter}
        label="cardholder name"
        placeholder="e.g. Jane Appleseed"
        min={4}
      />
      <FormField
        name="number"
        value={number}
        setValue={setNumber}
        error={numberError}
        setError={setNumberError}
        formatter={numberFormatter}
        label="card number"
        placeholder="e.g. 1234 5678 9123 0000"
        min={19}
      />

      <div className="form__items">
        <FormDateFields />
        <FormField
          name="cvc"
          value={CVC}
          setValue={setCVC}
          error={CVCError}
          setError={setCVCError}
          formatter={CVCFormatter}
          label="cvc"
          placeholder="e.g. 123"
          min={3}
        />
      </div>

      <Button>Confirm</Button>
    </form>
  );
}
export { Form };
