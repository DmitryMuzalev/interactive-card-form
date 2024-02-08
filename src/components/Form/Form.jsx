import { FormField } from "components/FormField/FormField";
import styles from "./Form.module.scss";
import { Button } from "components/Button/Button";
import { FormDateFields } from "components/FormDateFields/FormDateFields";

function Form({
  name,
  numberCard,
  month,
  year,
  CVC,
  handlerInputCVC,
  handlerInputName,
  handlerInputNumber,
  handlerInputMonth,
  onBlurInputMonth,
  handlerInputYear,
  onBlurInputYear,
}) {
  return (
    <form
      className={styles.form}
      autoComplete="off"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <FormField
        name="name"
        label="cardholder name"
        value={name}
        handlerOnChange={handlerInputName}
        placeholder="e.g. Jane Appleseed"
      />
      <FormField
        name="number"
        label="card number"
        value={numberCard}
        handlerOnChange={handlerInputNumber}
        placeholder="e.g. 1234 5678 9123 0000"
      />
      <div className={styles.formItems}>
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
        />
      </div>
      <Button>Confirm</Button>
    </form>
  );
}
export { Form };
