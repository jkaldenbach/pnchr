import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>Workouts</h1>
        <button title="Create a new workout">+</button>
      </div>
    </main>
  );
}
