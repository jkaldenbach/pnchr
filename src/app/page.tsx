import Link from "next/link";

import { Header } from "@/components/Header";
import commonStyles from "./pageCommon.module.css";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header>PNCHR</Header>
      <ul className={styles.nav}>
        <li>
          <Link className={commonStyles.buttonLink} href="/workout">
            Workout
          </Link>
        </li>
        <li>
          <Link className={commonStyles.buttonLink} href="/timer">
            Timer
          </Link>
        </li>
      </ul>
    </main>
  );
}
