import { FormField } from "components/FormField/FormField";
import { Button } from "components/Button/Button";
import { useAppContext } from "hook/useAppContext";
import { FormDateFields } from "components/FormDateFields/FormDateFields";

function Form() {
  const {
    name,
    nameError,
    number,
    numberError,
    CVC,
    CVCError,
    setIsConfirm,
    handlerOnChangeName,
    handlerOnBlurName,
    handlerOnChangeNumber,
    handlerOnBlurNumber,
    handlerOnChangeCVC,
    handlerOnBlurCVC,
    resetForm,
  } = useAppContext();

  const handlerOnSubmit = (e) => {
    e.preventDefault();
    !nameError && !numberError && !CVCError && resetForm();
    setIsConfirm(true);
  };

  return (
    <form className="form" autoComplete="off" onSubmit={handlerOnSubmit}>
      <FormField
        name="name"
        value={name}
        label="cardholder name"
        placeholder="e.g. Jane Appleseed"
        handlerOnChange={handlerOnChangeName}
        handlerOnBlur={handlerOnBlurName}
        error={nameError}
      />
      <FormField
        name="number"
        value={number}
        label="card number"
        placeholder="e.g. 1234 5678 9123 0000"
        handlerOnChange={handlerOnChangeNumber}
        handlerOnBlur={handlerOnBlurNumber}
        error={numberError}
      />

      <div className="form__items">
        <FormDateFields />
        <FormField
          name="cvc"
          value={CVC}
          label="cvc"
          placeholder="e.g. 123"
          handlerOnChange={handlerOnChangeCVC}
          handlerOnBlur={handlerOnBlurCVC}
          error={CVCError}
        />
      </div>

      <Button>Confirm</Button>
    </form>
  );
}
export { Form };
