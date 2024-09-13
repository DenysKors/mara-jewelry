import styles from './BenefitsSection.module.css';

export default function BenefitsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.box}>
        <svg width="100" height="100">
          <use href="/icons.svg#icon-hand-heart"></use>
        </svg>
        <p className={styles.text}>
          прикраси виготовляються вручну з любов&apos;ю
        </p>
      </div>
      <div className={styles.box}>
        <svg width="100" height="100">
          <use href="/icons.svg#icon-premium"></use>
        </svg>
        <p className={styles.text}>
          використовуються натуральне каміння та фурнітура преміальної якості
        </p>
      </div>
      <div className={styles.box}>
        <svg width="100" height="100">
          <use href="/icons.svg#icon-recommend"></use>
        </svg>
        <p className={styles.text}>нас рекомендують своїм близьким</p>
      </div>
    </section>
  );
}
