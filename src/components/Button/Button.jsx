import styles from "./Button.module.scss";

function Button({ children, cb = () => {} }) {
  return (
    <button className={styles.button} onClick={cb}>
      {children}
    </button>
  );
}
export { Button };
