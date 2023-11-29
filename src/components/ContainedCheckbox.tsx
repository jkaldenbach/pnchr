import * as React from "react";
import { GiCheckMark, GiSquare } from "react-icons/gi";

import styles from "./ContainedCheckbox.module.css";

export function ContainedCheckbox(props: {
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
        {props.checked ? <GiCheckMark /> : <GiSquare />}
        <span>{props.label}</span>
      </label>
    </div>
  );
}
