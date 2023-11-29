import * as React from "react";

import { Interval, MultiTimer, TimerConfig } from "./Timer";

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

function useWorkIntervals(workoutConfig: WorkoutConfig): {
  message?: string;
  setInterval(interval: Interval): void;
} {
  const [activeWorkInterval, setActiveInterval] = React.useState(0);
  const [interval, setInterval] = React.useState<Interval>();
  const [message, setMessage] = React.useState<string>();

  React.useEffect(() => {
    if (interval?.kind === "work") {
      setMessage("1 - 1 - 2");
    } else if (interval?.kind === "recovery") {
      switch (interval?.name) {
        case "punches":
          setMessage("Easy 1's and 2's");
          break;
        case "slips":
          setMessage("Slip left; slip right");
          break;
        default:
          setMessage(undefined);
      }
    }
  }, [interval]);

  React.useEffect(() => {
    if (message) {
      const utterance = new SpeechSynthesisUtterance(message);
      utterance.rate = 0.95;
      window.speechSynthesis.speak(utterance);
    }
  }, [message]);

  return {
    message,
    setInterval,
  };
}

export function WorkoutTimer(props: {
  timerConfig: TimerConfig;
  workoutConfig: WorkoutConfig;
  onComplete(): void;
}): JSX.Element {
  const { message, setInterval } = useWorkIntervals(props.workoutConfig);
  console.log("message?", message);

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
      onIntervalChange={setInterval}
    >
      {message}
    </MultiTimer>
  );
}
