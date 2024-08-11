import Image from 'next/image';

import styles from './Footer.module.css';
import Logo from '../../assets/images/Logo.png';
import instagram from '../../assets/svg/instagram.svg';
import telegram from '../../assets/svg/telegram.svg';

export default function Footer() {
  return (
    <footer className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Image
            src={Logo}
            className={styles.image}
            alt="Mara Jewelry Logo"
            priority
          />
          <div className={styles.box}>
            <a
              className={styles.link}
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
            <a
              className={styles.link}
              href="https://t.me/+380992687868"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Telegram"
            >
              <Image
                src={telegram}
                alt="Telegram Icon"
                width={16}
                height={16}
              />
            </a>
          </div>
        </div>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <b>Інформація</b>
          </li>
          <li className={styles.listItem}>Про Mara Jewelry</li>
          <li className={styles.listItem}>Оплата та доставка</li>
        </ul>
      </div>
      <div className={styles.copyBox}>
        <span className={styles.copy}>
          &copy; 2023 MaraJewelry, All Rights Reserved
        </span>
        <span className={styles.dev}>Created by TechDev</span>
      </div>
    </footer>
  );
}
