import * as React from "react";

import { Interval, MultiTimer, TimerConfig } from "./Timer";
import { padWorkCallout } from "@/lib/workout";

export type WorkoutConfig = {
  padWork: boolean;
  combos: boolean;
  situps: boolean;
  pushups: boolean;
  activeRecovery: boolean;
};

const SEQUENCE: (keyof WorkoutConfig)[] = [
  "padWork",
  "combos",
  "situps",
  "pushups",
];

const NAME_MAP: Partial<Record<keyof WorkoutConfig, string>> = {
  padWork: "Pad Work",
  combos: "Combos",
  situps: "Sit-Ups",
  pushups: "Push-Ups",
};

function useWorkIntervals(workoutConfig: WorkoutConfig): {
  message?: string;
  setWorkoutInterval(interval: Interval): void;
} {
  const [activeWorkInterval, setActiveInterval] = React.useState(0);
  const [interval, setWorkoutInterval] = React.useState<Interval>();
  const [message, setMessage] = React.useState<string>();

  React.useEffect(() => {
    let calloutInterval: NodeJS.Timeout;
    if (interval?.kind === "work") {
      switch (interval?.name) {
        case "situps":
        case "pushups":
          setMessage(NAME_MAP[interval?.name]);
          setTimeout(() => {
            setMessage("Keep pushing!");
          }, ((interval?.duration ?? 0) * 1000) / 2);
          break;
        case "padWork":
          setMessage(NAME_MAP[interval?.name]);
          calloutInterval = setInterval(() => {
            setMessage(padWorkCallout());
          }, 2000);
        default:
          setMessage("1 - 1 - 2");
      }
    } else if (interval?.kind === "recovery") {
      setMessage("RECOVERY");
      setTimeout(() => {
        switch (interval?.name) {
          case "punches":
            setMessage("Easy 1's and 2's");
            break;
          case "slips":
            setMessage("Slip left; slip right");
            break;
        }
      }, 1000);
    }

    return () => clearInterval(calloutInterval);
  }, [interval]);

  React.useEffect(() => {
    if (message) {
      const utterance = new SpeechSynthesisUtterance(
        message.replaceAll(" - ", " ")
      );
      utterance.rate = 0.95;
      window.speechSynthesis.speak(utterance);
    }
  }, [message]);

  return {
    message,
    setWorkoutInterval,
  };
}

export function WorkoutTimer(props: {
  timerConfig: TimerConfig;
  workoutConfig: WorkoutConfig;
  onComplete(): void;
}): JSX.Element {
  const { message, setWorkoutInterval } = useWorkIntervals(props.workoutConfig);

  const timerConfig = React.useMemo(
    () => ({
      ...props.timerConfig,
      workSequence: SEQUENCE.filter(
        (activity) => props.workoutConfig[activity]
      ).sort(() => 1 - Math.floor(Math.random() * 2)),
      recoverySequence: props.workoutConfig.activeRecovery
        ? ["punches", "slips"]
        : undefined,
    }),
    [] // eslint-disable-line react-hooks/exhaustive-deps
  );

  return (
    <MultiTimer
      config={timerConfig}
      onComplete={props.onComplete}
      onIntervalChange={setWorkoutInterval}
    >
      {message}
    </MultiTimer>
  );
}
