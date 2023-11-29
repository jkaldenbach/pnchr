import * as React from "react";
import classnames from "classnames";
import Link from "next/link";
import { GiBoxingGlove } from "react-icons/gi";

import styles from "./Header.module.css";

export function Header(props: React.ComponentProps<"div">): JSX.Element {
  const { className, children, ...rest } = props;
  return (
    <div className={classnames(styles.container, className)} {...rest}>
      <Link href="/">
        <GiBoxingGlove className={styles.icon} />
      </Link>
      <h1> {children}</h1>
    </div>
  );
}
