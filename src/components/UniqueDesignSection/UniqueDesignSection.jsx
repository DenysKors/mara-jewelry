import styles from './UniqueDesignSection.module.css';

export default function UniqueDesignSection() {
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
            <svg width="26" height="26">
              <use href="./icons.svg#icon-telegram"></use>
            </svg>
          </a>
          <div className={styles.circle}></div>
        </div>
      </div>
    </section>
  );
}
