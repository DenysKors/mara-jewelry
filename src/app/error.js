'use client';
import styles from './error.module.css';

export default function Error({ reset }) {
  return (
    <div className={styles.box}>
      <h2>Щось пішло не так, як хотілось!</h2>
      <button className={styles.button} onClick={() => reset()}>
        Спробувати знову
      </button>
    </div>
  );
}
