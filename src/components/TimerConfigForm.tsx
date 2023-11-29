import * as React from "react";

import { TimerConfig } from "./Timer";

import styles from "./TimerConfigForm.module.css";

export function TimerConfigForm(props: {
  value: TimerConfig;
  onChange(value: TimerConfig): void;
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
      props.value.workInterval * props.value.numberOfSets +
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
        <label htmlFor="workInterval">Work Interval (seconds)</label>
        <input
          type="number"
          name="workInterval"
          onChange={handleChange("workInterval")}
          value={props.value.workInterval}
        />
      </div>
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
