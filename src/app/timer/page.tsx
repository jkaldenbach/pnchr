"use client";
import * as React from "react";
import classnames from "classnames";

import { MultiTimer, TimerConfig } from "@/components/Timer";

import styles from "./page.module.css";

type DisplayState = "configuring" | "active" | "complete";

export default function TimerPage(): JSX.Element {
  const [displayState, setDisplayState] =
    React.useState<DisplayState>("configuring");
  const [config, setConfig] = React.useState<TimerConfig>({
    workInterval: 30,
    recoveryInterval: 10,
    numberOfSets: 15,
    countDown: 3,
  });

  function handleChange(name: string) {
    return function (e: React.ChangeEvent<HTMLInputElement>) {
      setConfig((c: TimerConfig) => ({ ...c, [name]: Number(e.target.value) }));
    };
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDisplayState("active");
  }

  function getTotalDuration(): string {
    const totalSeconds =
      config.workInterval * config.numberOfSets +
      config.recoveryInterval * (config.numberOfSets - 1);
    const totalMinutes = (totalSeconds / 60).toString();
    const [minuteStr, secondStr] = totalMinutes.split(".");

    if (!secondStr) return `${minuteStr} Minutes`;

    const remainderSeconds = Math.round(Number(`0.${secondStr}`) * 60);
    return `${minuteStr} Min ${remainderSeconds} Sec`;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Timer</h1>
      {displayState === "configuring" && (
        <form className={styles.configForm} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="workInterval">Work Interval (seconds)</label>
            <input
              type="number"
              name="workInterval"
              onChange={handleChange("workInterval")}
              value={config.workInterval}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="recoveryInterval">
              Recovery Interval (seconds)
            </label>
            <input
              type="number"
              name="recoveryInterval"
              onChange={handleChange("recoveryInterval")}
              value={config.recoveryInterval}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="numberOfSets">Number of Sets</label>
            <input
              type="number"
              name="numberOfSets"
              onChange={handleChange("numberOfSets")}
              value={config.numberOfSets}
            />
          </div>
          <div className={styles.field}>
            <label>Total Time</label>
            <div>{getTotalDuration()}</div>
          </div>
          <button className={styles.cta} type="submit">
            Start
          </button>
        </form>
      )}
      {displayState === "active" && (
        <>
          <MultiTimer
            config={config}
            onComplete={() => setDisplayState("complete")}
          />
          <button
            className={styles.cancelTimer}
            onClick={() => setDisplayState("configuring")}
            title="Cancel timer"
          >
            X
          </button>
        </>
      )}
      {displayState === "complete" && (
        <div className={styles.content}>
          <h2>Finished</h2>
          <p>
            <button onClick={() => setDisplayState("configuring")}>
              Reset
            </button>
          </p>
        </div>
      )}
    </div>
  );
}
