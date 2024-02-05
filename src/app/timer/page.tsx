"use client";
import * as React from "react";
import classnames from "classnames";

import { Header } from "@/components/Header";
import { MultiTimer, TimerConfig } from "@/components/Timer";
import { TimerConfigForm } from "@/components/TimerConfigForm";

import commonStyles from "../pageCommon.module.css";
import styles from "./page.module.css";

type DisplayState = "configuring" | "active" | "complete";

export default function TimerPage(): JSX.Element {
  const [displayState, setDisplayState] =
    React.useState<DisplayState>("configuring");
  const [config, setConfig] = React.useState<TimerConfig>({
    punchInterval: 30,
    repInterval: 0,
    recoveryInterval: 10,
    numberOfSets: 15,
    countDown: 3,
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDisplayState("active");
  }

  return (
    <div className={commonStyles.container}>
      <Header>Timer</Header>
      {displayState === "configuring" && (
        <form className={styles.configForm} onSubmit={handleSubmit}>
          <TimerConfigForm value={config} onChange={setConfig} />
          <button className={commonStyles.cta} type="submit">
            Start
          </button>
        </form>
      )}
      {displayState === "active" && (
        <MultiTimer
          config={config}
          onComplete={() => setDisplayState("complete")}
        />
      )}
      {displayState === "complete" && (
        <div className={commonStyles.content}>
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
