import { clsx } from "clsx";
import styles from "./CardBack.module.scss";
import { useAppContext } from "hook/useAppContext";

function CardBack() {
  const cardBackStyles = clsx("card", styles.cardBack);

  const { CVC } = useAppContext();

  const CVCPrint = CVC.padEnd(3, "0");
  return (
    <div className={cardBackStyles}>
      <span>{CVCPrint}</span>
    </div>
  );
}
export { CardBack };
