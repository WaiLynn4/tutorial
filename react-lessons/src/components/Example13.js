"use client";

import styles from "../components/Example13.module.css";

//Example13: Add CSS External Style in React
export default function UserProfile() {
  return (
    <div>
      <h1 className={styles.header}>User Profile</h1>
      <p className={styles.name}>Name : Mg Kaung</p>
      <input className={styles.userInput} />
    </div>
  );
}
