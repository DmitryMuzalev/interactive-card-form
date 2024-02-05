import { clsx } from "clsx";
import styles from "./CardBack.module.scss";

function CardBack() {
  const cardBackStyles = clsx("card", styles.cardBack);
  return <div className={cardBackStyles}></div>;
}
export { CardBack };
