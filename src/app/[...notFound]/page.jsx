import Link from 'next/link';
import styles from './page.module.css';

export default function NotFound() {
  return (
    <div className={styles.box}>
      <p>Сторінка не знайдена</p>
      <Link href="/">Повернутися на Головну</Link>
    </div>
  );
}
