import * as React from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";

import styles from "./ToggleCheckbox.module.css";

export default function ToggleCheckbox(props: {
  checked: boolean;
  label: React.ReactNode;
  name: string;
  onChange(checked: boolean, name: string): void;
}): JSX.Element {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    props.onChange(e.target.checked, props.name);
  }

  return (
    <div>
      <input
        className={styles.input}
        type="checkbox"
        id={props.name}
        name={props.name}
        checked={props.checked}
        onChange={handleChange}
      />
      <label className={styles.container} htmlFor={props.name}>
        {props.checked ? (
          <BsToggleOn className={styles.icon} />
        ) : (
          <BsToggleOff className={styles.icon} />
        )}
        <span>{props.label}</span>
      </label>
    </div>
  );
}
