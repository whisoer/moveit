import { useContext } from "react";
import { CountdownContext } from "../contexts/CountdownContext";
import styles from "../styles/components/Countdown.module.css";

export function Countdown() {
  const {
    seconds,
    minutes,
    isActive,
    hasFinish,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinish ? (
        <button disabled className={styles.countdonwButton}>
          Ciclo encerrado
          <img src="icons/check-circle.svg" />
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.countdonwButton} ${styles.countdonwButtonActive}`}
              onClick={resetCountdown}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              type="button"
              className={styles.countdonwButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}
