import styles from "./CardFront.module.scss";
import cardLogo from "assets/card-logo.svg";
import { clsx } from "clsx";
import { useAppContext } from "hook/useAppContext";
import { numberFormatter } from "util/fieldsFormatters";

function CardFront() {
  const cardFrontStyles = clsx("card", styles.cardFront);

  const { name, number, date } = useAppContext();
  const printNumber = numberFormatter(
    number.split(" ").join("").padEnd(16, "0")
  );

  return (
    <div className={cardFrontStyles}>
      <img src={cardLogo} alt="card logo" />
      <div className={styles.cardFrontInfo}>
        <div className={styles.cardFrontNumber}>{printNumber}</div>
        <div className={styles.cardFrontLabel}>
          <span>{name ? name : "jane appleseed"}</span>
          <span>00/00</span>
        </div>
      </div>
    </div>
  );
}
export { CardFront };
