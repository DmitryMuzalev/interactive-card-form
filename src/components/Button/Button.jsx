import styles from "./Button.module.scss";

function Button({children}) {
  return <div className={styles.button}>{children}</div>;
}
export { Button };
