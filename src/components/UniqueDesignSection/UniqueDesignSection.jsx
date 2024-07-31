import Image from 'next/image';
import styles from './UniqueDesignSection.module.css';

import telegram from '../../assets/svg/telegram.svg';

export default function UniqueDesign() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Хочеш створити унікальний дизайн?</h2>
      <p className={styles.text}>Ми залюбки допоможемо Вам з усіма питаннями</p>
      <div className={styles.linkWrapper}>
        <span className={styles.span}>Отримати консультацію тут:</span>
        <div className={styles.container}>
          <a
            className={styles.link}
            href="https://t.me/+380992687868"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Telegram"
          >
            <Image src={telegram} alt="Telegram Icon" width={26} height={26} />
          </a>
          <div className={styles.circle}></div>
        </div>
      </div>
    </section>
  );
}
