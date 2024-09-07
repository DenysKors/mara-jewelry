'use client';

import { useRouter } from 'next/navigation';
import styles from './LinkBack.module.css';

export default function LinkBack({ children }) {
  const router = useRouter();
  return (
    <button
      className={styles.link}
      type="button"
      aria-label="link back"
      onClick={() => {
        router.back();
      }}
    >
      <svg className={styles.linkIcon}>
        <use href="./icons.svg#icon-arrow-left"></use>
      </svg>
      {children}
    </button>
  );
}
