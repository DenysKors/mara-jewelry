import Image from 'next/image';
import Link from 'next/link';

import styles from './HeroSection.module.css';
import HeroCarousel from '../HeroCarousel/HeroCarousel';
import instagram from '../../assets/svg/instagram.svg';
import telegram from '../../assets/svg/telegram.svg';

import { pageData } from '@/app/pageData';

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
      <Link
        href={{
          pathname: pageData[1].href,
          query: { product: 'all' },
        }}
        className={styles.link}
      >
        Придбати прикрасу
      </Link>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <a
            className={styles.listLink}
            href="https://www.instagram.com/mara_jewelryua?igsh=MTN5emJhbTNsc2NnYQ=="
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Instagram"
          >
            <Image
              src={instagram}
              alt="Instagram Icon"
              width={16}
              height={16}
            />
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
            <Image src={telegram} alt="Telegram Icon" width={16} height={16} />
          </a>
        </li>
      </ul>
      <HeroCarousel />
    </section>
  );
}
