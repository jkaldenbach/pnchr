"use client";
import * as React from "react";
import classnames from "classnames";
import startCase from "lodash/startCase";

import { Ring, RingProps } from "@/components/Ring";

import styles from "./Timer.module.css";

export type TimerConfig = {
  workInterval: number;
  recoveryInterval: number;
  numberOfSets: number;
  countDown: number;
  workSequence?: string[];
  recoverySequence?: string[];
};

export type Interval = {
  kind: "work" | "recovery";
  duration: number;
  name?: string;
};

function useSingleTimer(
  duration: number,
  onComplete: () => void
): { secondsRemaining: number } {
  const timerRef = React.useRef<NodeJS.Timeout>();
  const [secondsRemaining, setSecondsRemaining] = React.useState(duration);

  React.useEffect(() => {
    const VAR = "--color-background";
    const ALT_VAR = "--color-background-alt";
    const initialColor = window
      .getComputedStyle(document.body)
      .getPropertyValue(VAR);
    const initialAlt = window
      .getComputedStyle(document.body)
      .getPropertyValue(ALT_VAR);
    document.documentElement.style.setProperty(VAR, "var(--color-black)");
    document.documentElement.style.setProperty(
      ALT_VAR,
      "var(--color-dark-green)"
    );

    return () => {
      document.documentElement.style.setProperty(VAR, initialColor);
      document.documentElement.style.setProperty(ALT_VAR, initialAlt);
    };
  }, []);

  React.useEffect(() => {
    if (timerRef.current) return;

    timerRef.current = setInterval(() => {
      setSecondsRemaining((s) => s - 1);
    }, 1000);
  });

  React.useEffect(() => {
    if (secondsRemaining <= 0) {
      clearInterval(timerRef.current);
      onComplete();
    }
  }, [secondsRemaining]); // eslint-disable-line

  return { secondsRemaining };
}

function Timer(props: {
  duration: number;
  kind: Interval["kind"];
  onComplete(): void;
}): JSX.Element {
  const { secondsRemaining } = useSingleTimer(props.duration, props.onComplete);

  React.useEffect(() => {
    if (secondsRemaining <= 3) {
      const frequency = secondsRemaining === 0 ? 875 : 800;
      const timeout = secondsRemaining === 0 ? 100 : 50;
      const ctx = new AudioContext();
      const oscillator = ctx.createOscillator();
      oscillator.type = "sine";
      oscillator.frequency.value = frequency;
      oscillator.connect(ctx.destination);
      oscillator.start();
      setTimeout(() => {
        oscillator.stop();
      }, timeout);
    }
  }, [secondsRemaining]);

  const fraction = secondsRemaining / props.duration;

  const ringProps: RingProps =
    props.kind === "work"
      ? {
          color: "blue",
          fraction,
        }
      : {
          color: "blue",
          fraction: 0,
          innerColor: "red",
          innerFraction: fraction,
        };

  return <Ring {...ringProps}>{secondsRemaining}</Ring>;
}

export function useTimer(config: TimerConfig): {
  activeInterval: number;
  incActiveInterval(): void;
  intervals: Interval[];
} {
  const [activeInterval, setActiveInterval] = React.useState(0);
  const _intervals: Interval[] = [
    ...new Array(config.numberOfSets * 2 - 1),
  ].map((_, i) =>
    i % 2 === 0
      ? {
          kind: "work",
          duration: config.workInterval,
          name: config.workSequence
            ? config.workSequence[(i / 2) % config.workSequence.length]
            : undefined,
        }
      : {
          kind: "recovery",
          duration: config.recoveryInterval,
          name: config.recoverySequence
            ? config.recoverySequence[
                ((i - 1) / 2) % config.recoverySequence.length
              ]
            : undefined,
        }
  );

  const incActiveInterval = React.useCallback(() => {
    setActiveInterval((s) => s + 1);
  }, []);

  return {
    activeInterval,
    incActiveInterval,
    intervals: [
      { kind: "recovery", duration: config.countDown, name: "Get Ready!" },
      ..._intervals,
    ],
  };
}

export function MultiTimer(props: {
  config: TimerConfig;
  onComplete: () => void;
}): JSX.Element {
  const { activeInterval, incActiveInterval, intervals } = useTimer(
    props.config
  );

  function handleComplete() {
    if (activeInterval === intervals.length - 1) {
      props.onComplete();
    } else {
      incActiveInterval();
    }
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        {intervals[activeInterval]?.name ||
          startCase(intervals[activeInterval]?.kind)}
      </h2>
      <Timer
        key={activeInterval}
        duration={intervals[activeInterval]?.duration}
        kind={intervals[activeInterval]?.kind}
        onComplete={handleComplete}
      />
      <div className={styles.intervalList}>
        {intervals.map((interval, idx) =>
          interval.kind === "work" ? (
            <div
              key={idx}
              className={classnames(styles.intervalListItem, {
                [styles.intervalListComplete]: idx < activeInterval,
                [styles.intervalListActive]: idx === activeInterval,
              })}
            />
          ) : null
        )}
      </div>
    </div>
  );
}
