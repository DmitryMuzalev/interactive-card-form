import { ReactComponent as CompleteIcon } from "assets/icon-complete.svg";
import { Button } from "components/Button/Button";
import styles from "./Final.module.scss";
import { useAppContext } from "hook/useAppContext";

function Final() {
  const { setIsSent, setIsConfirm } = useAppContext();

  const onClickContinue = () => {
    setIsSent(false);
    setIsConfirm(false);
  };
  return (
    <div className={styles.final}>
      <CompleteIcon />
      <h2>thank you!</h2>
      <p>We've added your card details</p>
      <Button cb={onClickContinue}>Continue</Button>
    </div>
  );
}
export { Final };
