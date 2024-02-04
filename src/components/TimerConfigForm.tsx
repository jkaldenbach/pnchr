import * as React from "react";

import { TimerConfig } from "./Timer";

import styles from "./TimerConfigForm.module.css";

export function TimerConfigForm(props: {
  value: TimerConfig;
  onChange(value: TimerConfig): void;
  enableReps?: boolean;
  intervalRatio?: number;
}): JSX.Element {
  function handleChange(name: string) {
    return function (e: React.ChangeEvent<HTMLInputElement>) {
      props.onChange({
        ...props.value,
        [name]: Number(e.target.value),
      });
    };
  }

  function getTotalDuration(): string {
    const totalSeconds =
      (props.enableReps && props.intervalRatio
        ? props.intervalRatio *
            props.value.punchInterval *
            props.value.numberOfSets +
          (1 / props.intervalRatio) *
            props.value.repInterval *
            props.value.numberOfSets
        : props.value.punchInterval * props.value.numberOfSets) +
      props.value.recoveryInterval * (props.value.numberOfSets - 1);
    const totalMinutes = (totalSeconds / 60).toString();
    const [minuteStr, secondStr] = totalMinutes.split(".");

    if (!secondStr) return `${minuteStr} Minutes`;

    const remainderSeconds = Math.round(Number(`0.${secondStr}`) * 60);
    return `${minuteStr} Min ${remainderSeconds} Sec`;
  }

  return (
    <div className={styles.container}>
      <div className={styles.field}>
        <label htmlFor="punchInterval">Punching Work Interval (seconds)</label>
        <input
          type="number"
          name="punchInterval"
          onChange={handleChange("punchInterval")}
          value={props.value.punchInterval}
        />
      </div>
      {props.enableReps && (
        <div className={styles.field}>
          <label htmlFor="repInterval">Reps Work Interval (seconds)</label>
          <input
            type="number"
            name="repInterval"
            onChange={handleChange("repInterval")}
            value={props.value.repInterval}
          />
        </div>
      )}
      <div className={styles.field}>
        <label htmlFor="recoveryInterval">Recovery Interval (seconds)</label>
        <input
          type="number"
          name="recoveryInterval"
          onChange={handleChange("recoveryInterval")}
          value={props.value.recoveryInterval}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="numberOfSets">Number of Sets</label>
        <input
          type="number"
          name="numberOfSets"
          onChange={handleChange("numberOfSets")}
          value={props.value.numberOfSets}
        />
      </div>
      <div className={styles.field}>
        <label>Total Time</label>
        <div>{getTotalDuration()}</div>
      </div>
    </div>
  );
}
