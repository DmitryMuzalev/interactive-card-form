import styles from "./Form.module.scss";
import { Button } from "components/Button/Button";

function Form({
  name,
  numberCard,
  month,
  handlerInputName,
  handlerInputNumber,
  handlerInputMonth,
  onBlurInputMonth,
}) {
  return (
    <form
      className={styles.form}
      autoComplete="off"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className={styles.formItem}>
        <label htmlFor="name">cardholder name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="e.g. Jane Appleseed"
          value={name}
          onChange={handlerInputName}
          maxLength={40}
        />
      </div>
      <div className={styles.formItem}>
        <label htmlFor="number">card number</label>
        <input
          type="text"
          id="number"
          name="number"
          placeholder="e.g. 1234 5678 9123 0000"
          value={numberCard}
          onChange={handlerInputNumber}
        />
      </div>
      <div className={styles.formItems}>
        <div className={styles.formItem}>
          <label htmlFor="month">exp. date (mm/yy)</label>
          <div className={styles.formDateInputs}>
            <input
              type="text"
              id="month"
              name="month"
              placeholder="MM"
              value={month}
              onChange={handlerInputMonth}
              onBlur={onBlurInputMonth}
            />
            <input type="text" id="year" name="year" placeholder="YY" />
          </div>
        </div>
        <div className={styles.formItem}>
          <label htmlFor="cvc">cvc</label>
          <input type="text" id="cvc" name="cvc" placeholder="e.g. 123" />
        </div>
      </div>
      <Button>Confirm</Button>
    </form>
  );
}
export { Form };
