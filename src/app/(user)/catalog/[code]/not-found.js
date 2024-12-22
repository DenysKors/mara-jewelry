import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.box}>
      <p>Сторінка не знайдена</p>
      <Link className={styles.link} href="/">
        Повернутися на Головну
      </Link>
    </div>
  );
}
