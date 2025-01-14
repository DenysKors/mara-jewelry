import Link from 'next/link';
import styles from './page.module.css';

export default function NotFound() {
  return (
    <main className={styles.box}>
      <p>Сторінка не знайдена</p>
      <Link className={styles.link} href="/">
        Повернутися на Головну
      </Link>
    </main>
  );
}
