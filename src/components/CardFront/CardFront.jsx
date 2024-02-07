import styles from "./CardFront.module.scss";
import cardLogo from "assets/card-logo.svg";
import { clsx } from "clsx";

function CardFront() {
  const cardFrontStyles = clsx("card", styles.cardFront);
  return (
    <div className={cardFrontStyles}>
      <img src={cardLogo} alt="card logo" />
      <div className={styles.cardFrontInfo}>
        <div className={styles.cardFrontNumber}>0000 0000 0000 0000</div>
        <div className={styles.cardFrontLabel}>
          <span>jane appleseed</span>
          <span>00/00</span>
        </div>
      </div>
    </div>
  );
}
export { CardFront };
