import styles from "./FormDateFields.module.scss";

function FormDateFields({
  month,
  handlerInputMonth,
  onBlurInputMonth,
  year,
  handlerInputYear,
  onBlurInputYear,
}) {
  return (
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
        <input
          type="text"
          id="year"
          name="year"
          placeholder="YY"
          value={year}
          onChange={handlerInputYear}
          onBlur={onBlurInputYear}
        />
      </div>
      <span className={styles.formErrorMessage}>Error message</span>
    </div>
  );
}
export { FormDateFields };
