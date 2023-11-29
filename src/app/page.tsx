import Link from "next/link";

import Header from "@/components/Header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header>PNCHR</Header>
      <ul className={styles.nav}>
        <li>
          <Link href="/workout">Workout</Link>
        </li>
        <li>
          <Link href="/timer">Timer</Link>
        </li>
      </ul>
    </main>
  );
}
