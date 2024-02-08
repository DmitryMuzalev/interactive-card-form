import styles from "./FormField.module.scss";

function FormField({ name, value, handlerOnChange, label, placeholder }) {
  return (
    <div className={styles.formItem}>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handlerOnChange}
      />
      <span className={styles.formErrorMessage}>Error message</span>
    </div>
  );
}
export { FormField };
