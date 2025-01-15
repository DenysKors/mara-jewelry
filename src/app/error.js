'use client';
import styles from './error.module.css';

export default function Error({ reset }) {
  return (
    <div className={styles.box}>
      <h2 className={styles.title}>Щось пішло не так!</h2>
      <button className={styles.button} onClick={() => reset()}>
        Спробувати знову
      </button>
    </div>
  );
}
