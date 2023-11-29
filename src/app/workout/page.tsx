"use client";
import * as React from "react";
import commonStyles from "@/app/pageCommon.module.css";
import styles from "./page.module.css";

import ContainedCheckbox from "@/components/ContainedCheckbox";
import Header from "@/components/Header";
import ToggleCheckbox from "@/components/ToggleCheckbox";

type DisplayState = "config-workouts" | "config-timer" | "active" | "complete";

export default function WorkoutPage(): JSX.Element {
  const [displayState, setDisplayState] =
    React.useState<DisplayState>("config-workouts");
  const [workoutConfig, setWorkoutConfig] = React.useState({
    padWork: true,
    combos: true,
    situps: true,
    pushups: true,
    activeRecovery: false,
  });

  function handleChange(checked: boolean, name: string) {
    setWorkoutConfig((state) => ({
      ...state,
      [name]: checked,
    }));
  }

  return (
    <div className={commonStyles.container}>
      <Header>Workout</Header>
      {displayState !== "config-workouts" && (
        <button
          className={commonStyles.cancel}
          onClick={() => setDisplayState("config-workouts")}
          title="Cancel timer"
        >
          X
        </button>
      )}
      {displayState === "config-workouts" && (
        <div className={styles.workoutConfig}>
          <h2 className={commonStyles.header}>Configure Activities</h2>
          <ContainedCheckbox
            label="Pad Work"
            name="padWork"
            checked={workoutConfig.padWork}
            onChange={handleChange}
          />
          <ContainedCheckbox
            label="Combos"
            name="combos"
            checked={workoutConfig.combos}
            onChange={handleChange}
          />
          <ContainedCheckbox
            label="Sit Ups"
            name="situps"
            checked={workoutConfig.situps}
            onChange={handleChange}
          />
          <ContainedCheckbox
            label="Push Ups"
            name="pushups"
            checked={workoutConfig.pushups}
            onChange={handleChange}
          />
          <ToggleCheckbox
            label="Active Recovery"
            name="activeRecovery"
            checked={workoutConfig.activeRecovery}
            onChange={handleChange}
          />
          <button
            className={commonStyles.cta}
            onClick={() => setDisplayState("config-timer")}
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
}
