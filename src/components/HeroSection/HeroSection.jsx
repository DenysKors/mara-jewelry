// import Link from 'next/link';

import styles from './HeroSection.module.css';
import HeroCarousel from '../HeroCarousel/HeroCarousel';

// import { pageData } from '@/app/pageData';

export default function HeroSection() {
  return (
    <section className={styles.section}>
      <h1 className={styles.heroTitle}>
        Mara<span className={styles.heroSpan}>jewelry</span>
      </h1>
      <p className={styles.text}>
        Вирушайте в захоплюючу подорож світом неперевершеної краси і
        витонченості разом із нашими прикрасами з каміння ручної роботи
      </p>
      {/* <Link
        href={{
          pathname: pageData[1].href,
        }}
        className={styles.link}
      >
        Придбати прикрасу
      </Link> */}
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <a
            className={styles.listLink}
            href="https://www.instagram.com/mara_jewelryua?igsh=MTN5emJhbTNsc2NnYQ=="
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Instagram"
          >
            <svg width="16" height="16">
              <use href="/icons.svg#icon-instagram"></use>
            </svg>
          </a>
        </li>
        <li className={styles.listItem}>
          <a
            className={styles.listLink}
            href="https://t.me/+380992687868"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Telegram"
          >
            <svg width="16" height="16">
              <use href="/icons.svg#icon-telegram"></use>
            </svg>
          </a>
        </li>
      </ul>
      <HeroCarousel />
    </section>
  );
}
