import Link from 'next/link';
import styles from './CatalogSection.module.css';

import { pageData } from '@/app/pageData';

export default function CatalogSection() {
  return (
    <section className={styles.section}>
      <div className={styles.titleBox}>
        <h2 className={styles.title}>Каталог</h2>
        <div className={styles.linkBoxTop}>
          <Link
            href={{
              pathname: pageData[1].href,
              query: { product: 'all' },
            }}
            className={styles.link}
          >
            Переглянути весь
          </Link>
        </div>
      </div>
      <div className={styles.linkBoxBottom}>
        <Link
          href={{
            pathname: pageData[1].href,
            query: { product: 'all' },
          }}
          className={styles.link}
        >
          Переглянути весь
        </Link>
      </div>
    </section>
  );
}
