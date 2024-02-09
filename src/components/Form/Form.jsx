import { FormField } from "components/FormField/FormField";
import { Button } from "components/Button/Button";
import {
  handlerOnChangeName,
  handlerOnBlurName,
  handlerOnChangeNumber,
  handlerOnBlurNumber,
  handlerOnChangeCVC,
  handlerOnBlurCVC,
} from "util/fieldValidation";
//import { FormDateFields } from "components/FormDateFields/FormDateFields";

function Form({ setIsConfirm, isConfirm }) {
  return (
    <form
      className="form"
      autoComplete="off"
      onSubmit={(e) => {
        e.preventDefault();
        setIsConfirm(true);
      }}
    >
      <FormField
        name="name"
        label="cardholder name"
        placeholder="e.g. Jane Appleseed"
        isConfirm={isConfirm}
        handlerOnChange={handlerOnChangeName}
        handlerOnBlur={handlerOnBlurName}
      />
      <FormField
        name="number"
        label="card number"
        placeholder="e.g. 1234 5678 9123 0000"
        isConfirm={isConfirm}
        handlerOnChange={handlerOnChangeNumber}
        handlerOnBlur={handlerOnBlurNumber}
      />

      <FormField
        name="cvc"
        label="cvc"
        placeholder="e.g. 123"
        isConfirm={isConfirm}
        handlerOnChange={handlerOnChangeCVC}
        handlerOnBlur={handlerOnBlurCVC}
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
