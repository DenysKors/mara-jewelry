import styles from './page.module.css';
import { getAnalytics } from '@/lib/api';

export default async function DashboardPage() {
  const { productsAmount, articlesAmount } = await getAnalytics();

  return (
    <section className={styles.section}>
      <h3 className={styles.subTitle}>Аналітика</h3>
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <p className={styles.text}>Товарів</p>
          <p className={styles.stats}>{productsAmount}</p>
        </div>
        <div className={styles.box}>
          <p className={styles.text}>Статтей</p>
          <p className={styles.stats}>{articlesAmount}</p>
        </div>
      </div>
    </section>
  );
}
