"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import commonStyles from "@/app/pageCommon.module.css";
import styles from "./page.module.css";

import capImg from "@/assets/cap.png";

import { ContainedCheckbox } from "@/components/ContainedCheckbox";
import { Header } from "@/components/Header";
import { MultiTimer, TimerConfig } from "@/components/Timer";
import { TimerConfigForm } from "@/components/TimerConfigForm";
import { ToggleCheckbox } from "@/components/ToggleCheckbox";
import { WorkoutTimer, WorkoutConfig } from "@/components/WorkoutTimer";

type DisplayState = "config-workouts" | "config-timer" | "active" | "complete";

export default function WorkoutPage(): JSX.Element {
  const [displayState, setDisplayState] =
    React.useState<DisplayState>("config-workouts");
  const [workoutConfig, setWorkoutConfig] = React.useState<WorkoutConfig>({
    padWork: true,
    combos: true,
    situps: true,
    pushups: true,
    squats: true,
    activeRecovery: false,
  });
  const [timerConfig, setTimerConfig] = React.useState<TimerConfig>({
    punchInterval: 90,
    repInterval: 30,
    recoveryInterval: 5,
    numberOfSets: 15,
    countDown: 3,
  });

  function handleTimerConfigSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDisplayState("active");
  }

  function handleWorkoutConfigChange(checked: boolean, name: string) {
    setWorkoutConfig((state) => ({
      ...state,
      [name]: checked,
    }));
  }

  function handleWorkoutConfigSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDisplayState("config-timer");
  }

  const punchTypeCount = (["padWork", "combos"] as const).filter(
    (field) => workoutConfig[field]
  ).length;
  const repTypeCount = (["situps", "pushups", "squats"] as const).filter(
    (field) => workoutConfig[field]
  ).length;
  const enableReps = !!repTypeCount;
  const intervalRatio = enableReps ? punchTypeCount / repTypeCount : undefined;

  return (
    <div className={commonStyles.container}>
      <Header>Workout</Header>
      {displayState === "config-workouts" && (
        <form
          className={styles.workoutConfig}
          onSubmit={handleWorkoutConfigSubmit}
        >
          <h2 className={commonStyles.header}>Configure Activities</h2>
          <h3>Punching</h3>
          <ContainedCheckbox
            label="Pad Work"
            name="padWork"
            checked={workoutConfig.padWork}
            onChange={handleWorkoutConfigChange}
          />
          <ContainedCheckbox
            label="Combos"
            name="combos"
            checked={workoutConfig.combos}
            onChange={handleWorkoutConfigChange}
          />
          <h3>Reps</h3>
          <ContainedCheckbox
            label="Sit Ups"
            name="situps"
            checked={workoutConfig.situps}
            onChange={handleWorkoutConfigChange}
          />
          <ContainedCheckbox
            label="Push Ups"
            name="pushups"
            checked={workoutConfig.pushups}
            onChange={handleWorkoutConfigChange}
          />
          <ContainedCheckbox
            label="Squats"
            name="squats"
            checked={workoutConfig.squats}
            onChange={handleWorkoutConfigChange}
          />
          <div>
            <h3>Recovery</h3>
            <ToggleCheckbox
              label="Active Recovery"
              name="activeRecovery"
              checked={workoutConfig.activeRecovery}
              onChange={handleWorkoutConfigChange}
            />
          </div>
          <button className={commonStyles.cta} type="submit">
            Continue
          </button>
        </form>
      )}
      {displayState === "config-timer" && (
        <form className={styles.configForm} onSubmit={handleTimerConfigSubmit}>
          <TimerConfigForm
            value={timerConfig}
            onChange={setTimerConfig}
            enableReps={enableReps}
            intervalRatio={intervalRatio}
          />
          <button className={commonStyles.cta} type="submit">
            Start
          </button>
          <button
            type="button"
            onClick={() => setDisplayState("config-workouts")}
          >
            Cancel
          </button>
        </form>
      )}
      {displayState === "active" && (
        <>
          <WorkoutTimer
            timerConfig={timerConfig}
            workoutConfig={workoutConfig}
            onComplete={() => setDisplayState("complete")}
          />
        </>
      )}
      {displayState === "complete" && (
        <div className={styles.completeContainer}>
          <div>
            <h2>You Rock!</h2>
            <Link href="/" className={commonStyles.buttonLink}>
              Home
            </Link>
          </div>
          <Image
            alt="The Captain salutes you"
            src={capImg.src}
            height={capImg.height}
            width={capImg.width}
          />
        </div>
      )}
    </div>
  );
}
