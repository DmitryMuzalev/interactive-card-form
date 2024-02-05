import styles from "./CardFront.module.scss";
import { ReactComponent as CardLogo } from "assets/card-logo.svg";
import { clsx } from "clsx";

function CardFront() {
  const cardFrontStyles = clsx("card", styles.cardFront);
  return (
    <div className={cardFrontStyles}>
      <CardLogo style={{ flexGrow: 1 }} />
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
