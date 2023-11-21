import * as React from "react";
import classnames from "classnames";

import styles from "./Ring.module.css";

const FULL = 440;
const INNER_FULL = 377;

type RingColor = "blue" | "red";

export type RingProps = {
  className?: string;
  children?: React.ReactChild;
  color: RingColor;
  fraction: number;
  innerColor?: RingColor;
  innerFraction?: number;
};

export function Ring(props: RingProps): JSX.Element {
  return (
    <div className={classnames(styles.container, props.className)}>
      <span className={styles.content}>{props.children}</span>
      <svg
        className={styles.ring}
        viewBox="0 0 160 160"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <title>Time remainging</title>
          <circle
            id="ring-track"
            className={classnames(styles.ring)}
            style={{ strokeDashoffset: 0 }}
            r="69.85699"
            cy="81"
            cx="81"
            stroke-width="10"
            stroke-linecap="round"
            stroke="#000"
            fill="none"
          />
          <circle
            id="ring"
            className={classnames(styles.ring, styles[props.color])}
            style={{ strokeDashoffset: FULL * props.fraction }}
            r="69.85699"
            cy="81"
            cx="81"
            stroke-width="10"
            stroke-linecap="round"
            stroke="#000"
            fill="none"
          />
          {props.innerFraction && (
            <>
              <circle
                id="inner-ring-track"
                className={styles.innerRing}
                style={{ strokeDashoffset: 0 }}
                r="59.85699"
                cy="81"
                cx="81"
                stroke-width="10"
                stroke-linecap="round"
                stroke="#000"
                fill="none"
              />
              <circle
                id="inner-ring"
                className={classnames(
                  styles.innerRing,
                  props.innerColor ? styles[props.innerColor] : undefined
                )}
                style={{ strokeDashoffset: INNER_FULL * props.innerFraction }}
                r="59.85699"
                cy="81"
                cx="81"
                stroke-width="10"
                stroke-linecap="round"
                stroke="#000"
                fill="none"
              />
            </>
          )}
        </g>
      </svg>
    </div>
  );
}
