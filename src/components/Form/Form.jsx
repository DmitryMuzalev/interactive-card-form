import styles from "./Form.module.scss";

function Form() {
  return (
    <form className={styles.form}>
      <div className={styles.formItem}>
        <label htmlFor="name">cardholder name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="e.g. Jane Appleseed"
        />
      </div>
      <div className={styles.formItem}>
        <label htmlFor="number">card number</label>
        <input
          type="number"
          id="number"
          name="number"
          placeholder="e.g. 1234 56789123 0000"
        />
      </div>
      <div className={styles.formItems}>
        <div className={styles.formItem}>
          <label htmlFor="month">exp. date (mm/yy)</label>
          <input type="number" id="month" name="month" placeholder="MM" />
          <input type="number" id="year" name="year" placeholder="YY" />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="cvc">cvc</label>
          <input type="number" id="cvc" name="cvc" placeholder="e.g. 123" />
        </div>
      </div>
      <button type="submit">Confirm</button>
    </form>
  );
}
export { Form };
