import styles from "./Button.module.scss";

function Button({ children }) {
  return <button className={styles.button}>{children}</button>;
}
export { Button };
