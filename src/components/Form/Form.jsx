import { FormField } from "components/FormField/FormField";
import { Button } from "components/Button/Button";
import { useAppContext } from "hook/useAppContext";
//import { FormDateFields } from "components/FormDateFields/FormDateFields";

function Form() {
  const {
    name,
    nameError,
    number,
    numberError,
    CVC,
    CVCError,
    isConfirm,
    setIsConfirm,
    handlerOnChangeName,
    handlerOnBlurName,
    handlerOnChangeNumber,
    handlerOnBlurNumber,
    handlerOnChangeCVC,
    handlerOnBlurCVC,
    resetForm,
  } = useAppContext();

  return (
    <form
      className="form"
      autoComplete="off"
      onSubmit={(e) => {
        e.preventDefault();
        if (!nameError && !numberError && !CVCError) {
          resetForm();
        }
        setIsConfirm(true);
      }}
    >
      <FormField
        name="name"
        value={name}
        label="cardholder name"
        placeholder="e.g. Jane Appleseed"
        isConfirm={isConfirm}
        handlerOnChange={handlerOnChangeName}
        handlerOnBlur={handlerOnBlurName}
        error={nameError}
      />
      <FormField
        name="number"
        value={number}
        label="card number"
        placeholder="e.g. 1234 5678 9123 0000"
        isConfirm={isConfirm}
        handlerOnChange={handlerOnChangeNumber}
        handlerOnBlur={handlerOnBlurNumber}
        error={numberError}
      />

      <FormField
        name="cvc"
        value={CVC}
        label="cvc"
        placeholder="e.g. 123"
        isConfirm={isConfirm}
        handlerOnChange={handlerOnChangeCVC}
        handlerOnBlur={handlerOnBlurCVC}
        error={CVCError}
      />

      {/*      <div className="form__items">
        <FormDateFields
          month={month}
          handlerInputMonth={handlerInputMonth}
          onBlurInputMonth={onBlurInputMonth}
          year={year}
          handlerInputYear={handlerInputYear}
          onBlurInputYear={onBlurInputYear}
        />
        <FormField
          name="cvc"
          label="cvc"
          value={CVC}
          handlerOnChange={handlerInputCVC}
          placeholder="e.g. 123"
          isConfirm={isConfirm}
        />
      </div> */}
      <Button>Confirm</Button>
    </form>
  );
}
export { Form };
